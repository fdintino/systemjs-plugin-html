// Credits:
// Guy Bedford https://github.com/guybedford

/* eslint import/no-extraneous-dependencies: 0 */
import path from '@node/path';
import fs from '@node/fs';
import {Analyzer, FSUrlLoader} from 'polymer-analyzer';
import {Bundler} from 'polymer-bundler';
import parse5 from 'parse5';
import * as dom5 from 'dom5';

var isWin = process.platform.match(/^win/);

const domModuleMatch = dom5.predicates.AND(
  dom5.predicates.hasTagName('dom-module'),
  dom5.predicates.hasAttr('id'));

function mkdirp(target) {
  const initial = path.isAbsolute(target) ? path.sep : '';
  target.split(path.sep).reduce((parent, child) => {
    const cur = path.resolve(parent, child);
    if (!fs.existsSync(cur)) {
      fs.mkdirSync(cur);
    }
    return cur;
  }, initial);
}

function createPathMap(packages, pathmap) {
  if (typeof packages === 'undefined') {
    packages = Object.keys(System.packages);
  }
  if (typeof pathmap === 'undefined') {
    pathmap = {};
  }
  packages.forEach((p) => {
    if (!p.includes('/bower/')) {
      return;
    }
    if (System.packages[p] && System.packages[p].map) {
      var mapPackages = Object.values(System.packages[p].map).map(n => System.normalizeSync(n));
      createPathMap(mapPackages, pathmap);
    }
    var k = p.replace(/^file:\/\//, '');
    var prefix = (k.match(/^(.*)@[^/]+$/) || [])[1];
    if (!prefix) {
      return;
    }
    pathmap[prefix] = k;
  });
  return pathmap;
}

var pathmap = createPathMap();

class SystemJSUrlLoader {
  constructor(root) {
    this.otherRoot = path.dirname(root);
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
    baseUrl = path.dirname(fromFileURL(loads[0].address));
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
    mkdirp(path.dirname(opts.outFile));
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
