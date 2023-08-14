const { sortListUsingSelectionSort } = require('../src/services/sortingAlgorithms/sortListUsingSelectionSort');

describe('#sortListUsingSelectionSort', () => {
    describe('given a list of numbers', () => {
        it('returns the list sorted asc -> desc', () => {
            expect(sortListUsingSelectionSort([5, 2, 3, 1, 4])).toStrictEqual([1, 2, 3, 4, 5]);
            expect(sortListUsingSelectionSort([1])).toStrictEqual([1]);
            expect(sortListUsingSelectionSort(
                [4, 5, 6, 0, 7, 9, 10, 1, 8, 3],
            )).toStrictEqual([0, 1, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(sortListUsingSelectionSort(
                [6, 19, 20, 17, 7, 2, 14, 1, 4, 12, 3, 10, 11, 15, 9, 5, 18, 0, 8, 16],
            )).toStrictEqual(
                [
                    0, 1, 2, 3, 4, 5, 6,
                    7, 8, 9, 10, 11, 12, 14,
                    15, 16, 17, 18, 19, 20,
                ],
            );
            expect(sortListUsingSelectionSort(
                [
                    15, 13, 33, 28, 6, 11, 6, 9, 29, 35, 24, 33, 30, 23, 25, 36, 21, 25, 17, 21, 6, 31,
                    35, 31, 2, 4, 11, 1, 22, 14, 16, 16, 18, 31, 32, 32, 36, 24, 18, 12, 4, 36, 22, 15,
                    34, 21, 1, 4, 5, 21, 3, 9, 9, 0, 16, 5, 10, 1, 0, 1, 10, 17, 26, 6, 34, 0, 5, 33,
                    15, 33, 16, 24, 8, 28, 19, 6, 27, 13, 23, 21, 30, 28, 35, 24, 11, 34, 13, 14, 12,
                    15, 28, 7, 33, 15, 17, 27, 17, 12, 28, 12,
                ],
            )).toStrictEqual(
                [
                    0, 0, 0, 1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 8, 9,
                    9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 15, 16,
                    16, 16, 16, 17, 17, 17, 17, 18, 18, 19, 21, 21, 21, 21, 21, 22, 22, 23, 23, 24, 24,
                    24, 24, 25, 25, 26, 27, 27, 28, 28, 28, 28, 28, 29, 30, 30, 31, 31, 31, 32, 32, 33,
                    33, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36,
                ],
            );
        });
    });
});
