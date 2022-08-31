"use strict";

// First version, add two numbers
function fAdd_1(pA, pB) {
  return pA + pB;
}

// Second version, convert strings to numbers
function fAdd_2(pA, pB) {
  pA = Number(pA);
  pB = Number(pB);
  return pA + pB;
}

// Third version, throw error if both are not numbers
function fAdd_3(pA, pB) {
  pA = Number(pA);
  pB = Number(pB);
  if (isNaN(pA)) {
    throw new Error("First arg is not a number");
  }
  if (isNaN(pB)) {
    throw new Error("Second arg is not a number");
  }
  return pA + pB;
}

// Forth version, cleanup
function fAdd(pA, pB) {
  if (isNaN(pA = Number(pA)))
    throw new Error("First arg is not a number");
  if (isNaN(pB = Number(pB)))
    throw new Error("Second arg is not a number");
  return pA + pB;
}
