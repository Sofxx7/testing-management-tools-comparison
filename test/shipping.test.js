"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { calculateShipping } = require("../src/shipping");

describe("calculateShipping", () => {
  it("charges the domestic rate below the free-shipping threshold", () => {
    assert.equal(calculateShipping(60, "domestic"), 8);
  });

  it("offers free domestic shipping for orders of $100 or more", () => {
    assert.equal(calculateShipping(100, "domestic"), 0);
  });

  it("charges international shipping regardless of subtotal", () => {
    assert.equal(calculateShipping(150, "international"), 25);
  });

  it("rejects negative subtotals", () => {
    assert.throws(
      () => calculateShipping(-1, "domestic"),
      /non-negative/
    );
  });

  it("rejects unsupported destinations", () => {
    assert.throws(
      () => calculateShipping(50, "moon"),
      /domestic or international/
    );
  });
});
