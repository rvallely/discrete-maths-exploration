const { sortListUsingInsertionSort } = require('../src/services/sortingAlgorithms/sortListUsingInsertionSort');

describe('#sortListUsingInsertionSort', () => {
    describe('given a list of numbers', () => {
        it('returns a sorted list (asc -> desc)', () => {
            expect(sortListUsingInsertionSort([5, 2, 3, 1, 4]).sortedList).toStrictEqual([1, 2, 3, 4, 5]);
            expect(sortListUsingInsertionSort(
                [13, 3, 18, 6, 8, 9, 11, 12, 7, 2],
            ).sortedList).toStrictEqual([2, 3, 6, 7, 8, 9, 11, 12, 13, 18]);
            expect(sortListUsingInsertionSort([4, 2, 7, 1, 3]).sortedList).toStrictEqual([1, 2, 3, 4, 7]);
        });
    });
});
