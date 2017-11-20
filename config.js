System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  buildCSS: false,
  vulvanizeHTML: {
    "excludes": [
      "jspm_packages/github/Polymer/polymer@1.4.0/polymer.html"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "chai": "npm:chai@3.5.0",
    "core-js": "npm:core-js@1.2.6",
    "dom5": "npm:dom5@2.3.0",
    "marked": "github:chjj/marked@0.3.5",
    "mocha": "npm:mocha@2.4.5",
    "parse5": "npm:parse5@3.0.3",
    "polymer": "github:Polymer/polymer@1.4.0",
    "polymer-analyzer": "npm:polymer-analyzer@2.7.0",
    "polymer-bundler": "npm:polymer-bundler@3.1.1",
    "polymerjs": "test/polymer/polymer",
    "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.22",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@types/chai-subset@1.3.1": {
      "@types/chai": "npm:@types/chai@4.0.5"
    },
    "npm:@types/estraverse@0.0.6": {
      "@types/estree": "npm:@types/estree@0.0.37"
    },
    "npm:@types/parse5@2.2.34": {
      "@types/node": "npm:@types/node@6.0.92"
    },
    "npm:acorn-jsx@3.0.1": {
      "acorn": "npm:acorn@3.3.0"
    },
    "npm:acorn@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:acorn@5.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi-escape-sequences@3.0.0": {
      "array-back": "npm:array-back@1.0.4"
    },
    "npm:array-back@1.0.4": {
      "typical": "npm:typical@2.6.1"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chai@3.5.0": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:clone@2.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:command-line-args@3.0.5": {
      "array-back": "npm:array-back@1.0.4",
      "feature-detect-es6": "npm:feature-detect-es6@1.3.1",
      "find-replace": "npm:find-replace@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "typical": "npm:typical@2.6.1"
    },
    "npm:command-line-usage@3.0.8": {
      "ansi-escape-sequences": "npm:ansi-escape-sequences@3.0.0",
      "array-back": "npm:array-back@1.0.4",
      "feature-detect-es6": "npm:feature-detect-es6@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "table-layout": "npm:table-layout@0.3.0",
      "typical": "npm:typical@2.6.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:deep-extend@0.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:doctrine@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@2.0.2",
      "isarray": "npm:isarray@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom5@2.3.0": {
      "@types/clone": "npm:@types/clone@0.1.30",
      "@types/node": "npm:@types/node@6.0.92",
      "@types/parse5": "npm:@types/parse5@2.2.34",
      "clone": "npm:clone@2.1.1",
      "parse5": "npm:parse5@2.2.3"
    },
    "npm:escodegen@1.9.0": {
      "esprima": "npm:esprima@3.1.3",
      "estraverse": "npm:estraverse@4.2.0",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optionator": "npm:optionator@0.8.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:espree@3.5.2": {
      "acorn": "npm:acorn@5.2.1",
      "acorn-jsx": "npm:acorn-jsx@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esprima@3.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:feature-detect-es6@1.3.1": {
      "array-back": "npm:array-back@1.0.4"
    },
    "npm:find-replace@1.0.3": {
      "array-back": "npm:array-back@1.0.4",
      "test-value": "npm:test-value@2.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jsonschema@1.2.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:levn@0.3.0": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mocha@2.4.5": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:optionator@0.8.2": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
      "levn": "npm:levn@0.3.0",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@1.0.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse5@2.2.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:parse5@3.0.3": {
      "@types/node": "npm:@types/node@6.0.92",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:polymer-analyzer@2.7.0": {
      "@types/chai-subset": "npm:@types/chai-subset@1.3.1",
      "@types/chalk": "npm:@types/chalk@0.4.31",
      "@types/clone": "npm:@types/clone@0.1.30",
      "@types/cssbeautify": "npm:@types/cssbeautify@0.3.1",
      "@types/doctrine": "npm:@types/doctrine@0.0.1",
      "@types/escodegen": "npm:@types/escodegen@0.0.2",
      "@types/estraverse": "npm:@types/estraverse@0.0.6",
      "@types/estree": "npm:@types/estree@0.0.37",
      "@types/node": "npm:@types/node@6.0.92",
      "@types/parse5": "npm:@types/parse5@2.2.34",
      "chalk": "npm:chalk@1.1.3",
      "clone": "npm:clone@2.1.1",
      "cssbeautify": "npm:cssbeautify@0.3.1",
      "doctrine": "npm:doctrine@2.0.0",
      "dom5": "npm:dom5@2.3.0",
      "escodegen": "npm:escodegen@1.9.0",
      "espree": "npm:espree@3.5.2",
      "estraverse": "npm:estraverse@4.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsonschema": "npm:jsonschema@1.2.0",
      "parse5": "npm:parse5@2.2.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shady-css-parser": "npm:shady-css-parser@0.1.0",
      "stable": "npm:stable@0.1.6",
      "strip-indent": "npm:strip-indent@2.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:polymer-bundler@3.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "clone": "npm:clone@2.1.1",
      "command-line-args": "npm:command-line-args@3.0.5",
      "command-line-usage": "npm:command-line-usage@3.0.8",
      "dom5": "npm:dom5@2.3.0",
      "espree": "npm:espree@3.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "parse5": "npm:parse5@2.2.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "polymer-analyzer": "npm:polymer-analyzer@2.7.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:shady-css-parser@0.1.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.5.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:table-layout@0.3.0": {
      "array-back": "npm:array-back@1.0.4",
      "core-js": "npm:core-js@2.5.1",
      "deep-extend": "npm:deep-extend@0.4.2",
      "feature-detect-es6": "npm:feature-detect-es6@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "typical": "npm:typical@2.6.1",
      "wordwrapjs": "npm:wordwrapjs@2.0.0"
    },
    "npm:test-value@2.1.0": {
      "array-back": "npm:array-back@1.0.4",
      "typical": "npm:typical@2.6.1"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:wordwrapjs@2.0.0": {
      "array-back": "npm:array-back@1.0.4",
      "feature-detect-es6": "npm:feature-detect-es6@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "reduce-flatten": "npm:reduce-flatten@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "typical": "npm:typical@2.6.1"
    }
  }
});
