const { insertionSort } = require('../insertionSort');

describe('#insertionSort', () => {
    describe('given a list of numbers', () => {
        it('returns a sorted list (asc -> desc)', () => {
            expect(insertionSort([5, 2, 3, 1, 4])).toStrictEqual([1, 2, 3, 4, 5]);
            expect(insertionSort([13, 3, 18, 6, 8, 9, 11, 12, 7, 2])).toStrictEqual([2, 3, 6, 7, 8, 9, 11, 12, 13, 18]);
        });
    });
});
