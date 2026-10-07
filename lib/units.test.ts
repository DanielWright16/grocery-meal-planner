import {describe, it, expect} from 'vitest';
import { toCanonical, toCanonicalFor } from './units';

describe('toCanonical', () => {
  it('converts kilograms to grams', () => {
    const result = toCanonical(2, 'kg');
    expect(result.quantity).toBe(2000);
    expect(result.family).toBe("WEIGHT");
  });

  it('converts pounds to grams', () => {
    const result = toCanonical(1, 'lb');
    expect(result.quantity).toBeCloseTo(453.592, 2);
    expect(result.family).toBe("WEIGHT");
  });

  it('converts cups to milliliters', () => {
    const result = toCanonical(1, 'cup');
    expect(result.quantity).toBeCloseTo(236.588, 2);
    expect(result.family).toBe("VOLUME");
  });
});

describe('toCanonical with invalid input', () => {
    it('throws an error for unknown unit', () => {
        expect(() => toCanonical(5, "banana")).toThrow("Unknown unit: banana");
    });

    it('throws an error for negative quantity', () => {
        expect(() => toCanonical(-1, "g")).toThrow("Quantity must be non-negative");
    });
});

describe ('toCanonicalFor', () => {
    it("accepts a unit that matches the ingredient's family", () => {
        expect(toCanonicalFor(1, "kg", "WEIGHT")).toBe(1000);
    });

    it("rejects a unit from a different family", () => {
        expect(() => toCanonicalFor(1, "cup", "WEIGHT")).toThrow("cannot convert");
    });
    
});