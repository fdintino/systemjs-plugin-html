/*
  HTML Import plugin
  Adapted from systemjs/plugin-css
  https://github.com/systemjs/plugin-css
*/

function importHref(load) {
  return new Promise(function (resolve, reject) {
    var link = load.metadata.link = document.createElement('link');
    link.rel = 'import';
    link.href = load.address;

    var timeout = setTimeout(function () {
      reject('Unable to load HTML');
    }, waitSeconds * 1000);
    var _callback = function (error) {
      clearTimeout(timeout);
      link.onload = link.onerror = function () {};
      setTimeout(function () {
        if (error) {
          reject(error);
        } else {
          resolve('');
        }
      }, 7);
    };

    link.onload = function () {
      processDocument(link.import).then(function () {
        _callback();
      });
    };

    link.onerror = function (event) {
      _callback(event.error);
    };

    head.appendChild(link);
  });
}

if (typeof window === 'undefined') {
  exports.fetch = function (load) {
    load.metadata.build = true;
    load.metadata.format = 'defined';
    return '';
  };
  exports.instantiate = function () {};
  exports.bundle = function (loads, opts) {
    var loader = this;
    if (loader.buildHTML === false) {
      return '';
    }
    System.import('./html-builder').then((m) => {
        m.bundle.call(loader, loads, opts);
    }).catch((e) => {});
    // require('./html-builder').bundle.call(loader, loads, opts);
  };
} else {
  exports.build = false;
  exports.fetch = function (load) {
    return importHref(load);
  };

  exports.instantiate = function (load) {
    return load.metadata.link.import;
  };
}

var waitSeconds = 100;
var head = (typeof document === 'undefined') ? null : document.getElementsByTagName('head')[0];

function errCallback(err) {
  setTimeout(function () {
    throw err;
  });
}

// from https://github.com/ModuleLoader/es6-module-loader/issues/95#issuecomment-98705035
function processScript(script) {
  var source = script.innerHTML.substr(1);
  return System.module(source).catch(errCallback);
}

function processDocument(e) {
  var Q = [];

  // process modules in this document
  var scripts = e.querySelectorAll('script[type="module"]');
  for (var i = 0; i < scripts.length; i++) {
    Q.push(processScript(scripts[i]));
  }

  // process imports (not yet working as expected)
  var links = e.querySelectorAll('link[rel="import"]');
  for (var j = 0; j < links.length; j++) {
    Q.push(processDocument(links[j].import));
  }

  return Promise.all(Q);
}
