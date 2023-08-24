const { checkListValid } = require('../src/sorting-algorithms/controllers/getSortedList');

describe('#checkListValid', () => {
    describe('given a string only containing numbers, commas and spaces', () => {
        it('returns property listValid: true', () => {
            expect(checkListValid('2, 10, 7, 8').listValid).toBe(true);
        });
    });
    describe('given a string not only containing numbers, commas and spaces', () => {
        it('returns property listValid: true', () => {
            expect(checkListValid('2, 10, s7, 8.').listValid).toBe(false);
        });
    });
});
