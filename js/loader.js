class WasmLoader {
  constructor() {}

  async wasm(path) {
    console.info(`Called WasmLoader.wasm`);
    console.info(`Fetching ${path}`);

    if (!WebAssembly.instantiateStreaming) {
      return this.wasmFallback(path);
    }

    const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

    return instance.exports;
  }

  async wasmFallback(path) {
    console.info(`Called WasmLoader.wasmFallback`);
    console.info(`Using fallback ${path}`);

    const response = await fetch(path);
    const bytes = await response?.arrayBuffer();

    const { instance } = await WebAssembly.instantiate(bytes);

    return instance.exports;
  }
}
