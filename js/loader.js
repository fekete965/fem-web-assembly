class WasmLoader {
  constructor() {
    this._imports = {
      env: {
        abort() {
          throw new Error("Abort called from wasm file");
        },
      },
      index: {
        log(a) {
          console.log(a);
        },
      },
    };
  }

  async wasm(path, imports = this._imports) {
    console.info(`Called WasmLoader.wasm`);
    console.info(`Fetching ${path}`);

    if (!loader.instantiateStreaming) {
      return this.wasmFallback(path, imports);
    }

    const instance = await loader.instantiateStreaming(fetch(path), imports);

    return instance.exports;
  }

  async wasmFallback(path, imports = this._imports) {
    console.info(`Called WasmLoader.wasmFallback`);
    console.info(`Using fallback ${path}`);

    const response = await fetch(path);
    const bytes = await response?.arrayBuffer();

    const instance = await loader.instantiate(bytes, imports);

    return instance.exports;
  }
}
