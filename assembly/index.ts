// The entry file of your WebAssembly module.

declare function log(n: i32): void;

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function minusOne(n: i32): i32 {
  log(n);
  return n - 1;
}

export function fizzbuzz(n: i32): String | null {
  if (n % 15 === 0) {
    return "fizzbuzz";
  }

  if (n % 3 === 0) {
    return "fizz";
  }

  if (n % 5 === 0) {
    return "buzz";
  }

  return null;
}

// We allocate 2 pages worth of memory -> 2 * 64kb -> 128kb
memory.grow(2);
// We write directly to memory now
store<u8>(0, 21);
store<u8>(1, 99);

export function readMemory(i: i32): i32 {
  return load<u8>(i);
}
