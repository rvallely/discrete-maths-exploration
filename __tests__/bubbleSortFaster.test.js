const { sortListUsingBubbleSortFaster } = require('../src/services/sortingAlgorithms/sortListUsingBubbleSortFaster');

describe('#sortListUsingBubbleSortFaster', () => {
    describe('given a list of numbers', () => {
        it('returns them sorted (asc -> desc)', () => {
            // expect(bubbleSortFaster([7, 3, 10, 6, 4, 8, 5, 7])).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            // expect(bubbleSortFaster([5, 1, 3, 9, 10, 4, 8, 2, 7, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            // expect(bubbleSortFaster([13, 3, 18, 6, 8, 9, 11, 12, 7, 2])).toStrictEqual(
            //     [2, 3, 6, 7, 8, 9, 11, 12, 13, 18],
            // );
            expect(sortListUsingBubbleSortFaster([4, 1, 9, 3, 2])).toStrictEqual([1, 2, 3, 4, 9]);
        });
    });
});
