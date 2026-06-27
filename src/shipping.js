"use strict";

const FREE_SHIPPING_THRESHOLD = 100;

function calculateShipping(subtotal, destination) {
  if (!Number.isFinite(subtotal) || subtotal < 0) {
    throw new TypeError("Subtotal must be a non-negative number");
  }

  const rates = {
    domestic: 8,
    international: 25
  };

  if (!Object.hasOwn(rates, destination)) {
    throw new RangeError("Destination must be domestic or international");
  }

  if (destination === "domestic" && subtotal >= FREE_SHIPPING_THRESHOLD) {
    return 0;
  }

  return rates[destination];
}

module.exports = { calculateShipping };
