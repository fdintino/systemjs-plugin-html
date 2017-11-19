// Credits:
// Guy Bedford https://github.com/guybedford

/* eslint import/no-extraneous-dependencies: 0 */
import path from '@node/path';
import {Analyzer, FSUrlLoader} from 'polymer-analyzer';
import {Bundler} from 'polymer-bundler';
import mkdirp from '@node/mkdirp';
import {dirname} from '@node/path';
import parse5 from 'parse5';
import * as dom5 from 'dom5';
import {predicates} from 'dom5';
import fs from '@node/fs';

var isWin = process.platform.match(/^win/);

const domModuleMatch = predicates.AND(
  predicates.hasTagName('dom-module'),
  predicates.hasAttr('id'));

var pathmap = {};

function populatePathMap(packages) {
  packages.forEach((p) => {
    if (!p.includes('/bower/')) {
      return;
    }
    if (System.packages[p] && System.packages[p].map) {
      var mapPackages = Object.values(System.packages[p].map).map((n) => System.normalizeSync(n));
      populatePathMap(mapPackages);
    }
    var k = p.replace(/^file:\/\//, '');
    var prefix = (k.match(/^(.*)@[^/]+$/) || [])[1];
    if (!prefix) {
      return;
    }
    pathmap[prefix] = k;
  });
}

populatePathMap(Object.keys(System.packages));

class SystemJSUrlLoader {
  constructor(root) {
    this.otherRoot = dirname(root);
    this.root = path.resolve(process.cwd());
    this._loader = new FSUrlLoader(this.root);
  }
  canLoad(url) {
    return this._loader.canLoad(url);
  }
  load(url) {
    return new Promise((resolve, reject) => {
      const filepath = this.getFilePath(url);
      fs.readFile(filepath, 'utf8', (error, contents) => {
        if (error && url[0] != '/') {
          this.load('/' + url)
            .catch((e) => reject(e))
            .then((contents) => resolve(contents));
        } else if (error) {
          console.log('not found! ', url);
          reject(error);
        } else {
          resolve(contents);
        }
      });
    });
  }
  readDirectory(pth, deep) {
    return this._loader.readDirectory(pth, deep);
  }
  getFilePath(url) {
    if (url.indexOf(this.root.substr(1)) == 0) {
      url = '/' + url;
    }
    if (url[0] == '/') {
      if (!fs.existsSync(url)) {
        for (var lookup in pathmap) {
          if (url.indexOf(lookup) === 0) {
            url = url.replace(lookup, pathmap[lookup]);
            break;
          }
        }
      }
      return url;
    }
    var result = this._loader.getFilePath(url);
    return result;
  }
}

function fromFileURL(address) {
  address = address.replace(/^file:(\/+)?/i, '');

  if (isWin) {
    address = address.replace(/\//g, '\\');
  } else {
    address = '/' + address;
  }

  return address;
}

function extend(a, b) {
  for (var p in b) {
    if (Object.prototype.hasOwnProperty.call(b, p)) {
      a[p] = b[p];
    }
  }
  return a;
}

export function bundle(loads, opts) {
  var loader = this;
  var baseUrl = undefined;
  if (loads.length) {
    baseUrl = dirname(fromFileURL(loads[0].address));
  }

  const analyzer = new Analyzer({
    urlLoader: new SystemJSUrlLoader(baseUrl)
  });

  var options = {
    excludes: [],
    inlineScripts: true,
    inlineCss: true,
    implicitStrip: true,
    stripComments: true,
    analyzer: analyzer
  };

  if (loader.vulvanizeHTML) {
    extend(options, loader.vulvanizeHTML);
  }

  const bundler = new Bundler(options);

  var outFile = opts.outFile.replace(/\.js$/, '.html');
  var absOutFile = path.resolve(outFile);

  var output = loads.map(function (load) {
    return '<link rel="import" href="' + fromFileURL(load.address) + '">';
  }).join('\n');

  return new Promise(function (resolve, reject) {
    mkdirp.sync(dirname(opts.outFile));
    fs.writeFileSync(outFile, output);
    console.log('     Bundlerizing ', outFile);

    bundler.generateManifest([outFile]).then((manifest) => {
      bundler.bundle(manifest).then((result) => {
        var ast = result.documents.get(outFile).ast;
        const domModules = dom5.queryAll(ast, domModuleMatch);
        domModules.forEach((node) => {
          var url = dom5.getAttribute(node, 'assetpath');
          if (!url) {
            return;
          }
          if (url.startsWith('..' + path.resolve('.'))) {
            url = url.substr(2);
          }
          for (var lookup in pathmap) {
            if (url.indexOf(lookup) === 0) {
              url = url.replace(lookup, pathmap[lookup]);
              break;
            }
          }
          dom5.setAttribute(node, 'assetpath', path.relative(absOutFile, url));
        });
        var output = parse5.serialize(ast);
        fs.writeFileSync(outFile, output);
        resolve('');
      });
    });

  });
}

export default {bundle};
