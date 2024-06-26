import assert from "assert";
import { add, minusOne } from "../build/debug.js";

// Test add
assert.strictEqual(add(1, 2), 3);

// Test minusOne
assert.strictEqual(minusOne(2), 1);

// Test passed
console.log("Test passed");
