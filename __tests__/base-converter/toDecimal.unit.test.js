const { toDecimal } = require('../../src/base-converter/services/calculateBaseConversion');

describe('toDecimal', () => {
    it('returns the result, toDecimal calculations', () => {
        const { decimalResult, decimalCalculations } = toDecimal('472', '8');
        expect(decimalResult).toBe(314);
        expect(decimalCalculations.firstLine).toBe('= (2 * 8⁰) + (7 * 8¹) + (4 * 8²)');
        expect(decimalCalculations.secondLine).toBe('= (2 * 1) + (7 * 8) + (4 * 64)');
        expect(decimalCalculations.thirdLine).toBe('= 2 + 56 + 256');
        expect(decimalCalculations.fourthLine).toBe('= 314');
    });
});
