const { readFileSync } = require("node:fs");
const loader = require("@assemblyscript/loader");

const imports = {
  /* imports goes here */
};
const wasmPath = __dirname + "/build/release.wasm";
const wasmModule = loader.instantiateSync(fs.readFileSync(wasmPath), imports);

module.exports = wasmModule.exports;
