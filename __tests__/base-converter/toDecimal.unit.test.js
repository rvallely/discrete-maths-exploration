const { toDecimal } = require('../../src/base-converter/services/calculateBaseConversion');

describe('toDecimal', () => {
    it('returns the result, toDecimal calculations', () => {
        const { result, calculations } = toDecimal('472', '8');
        expect(result).toBe(314);
        expect(calculations.firstLine).toBe('= (2 * 8 ^ 0) + (7 * 8 ^ 1) + (4 * 8 ^ 2)');
        expect(calculations.secondLine).toBe('= (2 * 1) + (7 * 8) + (4 * 64)');
        expect(calculations.thirdLine).toBe('= 2 + 56 + 256');
        expect(calculations.fourthLine).toBe('= 314');
    });
});
