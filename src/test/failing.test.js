const request = require('supertest');
const app = require('../app');

describe('Failing Tests - For Pipeline Testing', () => {
  test('This test should FAIL - Testing pipeline failure scenario', () => {
    // This test will always fail
    expect(1).toBe(2); // 1 should never equal 2
  });

  test('Another failing test - Simulating broken feature', () => {
    const shouldBeTrue = false;
    expect(shouldBeTrue).toBe(true);
  });
});
