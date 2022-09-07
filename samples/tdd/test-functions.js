"use strict";

// Positive tests
QUnit.module('fAdd OK');

QUnit.test('Test with valid numbers, ver1', assert => {
  assert.equal(fAdd(1, 2), 3);
  assert.equal(fAdd(-2, 2), 0);
});

QUnit.test('Test with numbers as strings, ver2', assert => {
  assert.equal(fAdd("1", 2), 3);
  assert.equal(fAdd("1", "2"), 3);
  assert.equal(fAdd("1.5", 2.5), 4);
  assert.equal(fAdd("1.5", 2.7), 4.2);
});

// Negative tests
QUnit.module('fAdd NotOK');

QUnit.test("Test with non-number arguments, ver3", assert => {
  assert.throws(function () {fAdd("foo",2);}, /First/);
  assert.throws(function () {fAdd(3,"foo");}, /Second/);
  assert.throws(function () {fAdd("2foo",2);}, /First/);
  assert.throws(function () {fAdd(3.5,"2.x");}, /Second/);
});
