// The entry file of your WebAssembly module.

declare function log(n: i32): void;

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function minusOne(a: i32): i32 {
  log(a);
  return a - 1;
}

export function fizzbuzz(a: i32): String | null {
  if (a % 15 === 0) {
    return "fizzbuzz";
  }

  if (a % 3 === 0) {
    return "fizz";
  }

  if (a % 5 === 0) {
    return "buzz";
  }

  return null;
}
