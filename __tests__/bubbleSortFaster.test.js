const { sortListUsingBubbleSortFaster } = require('../src/sorting-algorithms/services/sortListUsingBubbleSortFaster');

describe('#sortListUsingBubbleSortFaster', () => {
    describe('given a list of numbers', () => {
        it('returns them sorted (asc -> desc)', () => {
            // expect(bubbleSortFaster([7, 3, 10, 6, 4, 8, 5, 7])).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            // expect(bubbleSortFaster([5, 1, 3, 9, 10, 4, 8, 2, 7, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            // expect(bubbleSortFaster([13, 3, 18, 6, 8, 9, 11, 12, 7, 2])).toStrictEqual(
            //     [2, 3, 6, 7, 8, 9, 11, 12, 13, 18],
            // );

            const {
                unsortedList,
                sortedList,
                inputSize,
                executionTimeMs,
                iterations,
            } = sortListUsingBubbleSortFaster([4, 1, 9, 3, 2]);

            console.log(iterations, '<<< returned iterations');
            // expect(unsortedList).toStrictEqual([4, 1, 9, 3, 2]);
            // expect(sortedList).toStrictEqual([1, 2, 3, 4, 9]);
            // expect(inputSize).toBe([4, 1, 9, 3, 2].length);
            // expect(typeof executionTimeMs).toBe('number');
            expect(iterations).toStrictEqual([{
                listBeforePass: [4, 1, 9, 3, 2],
                listAfterPass: [1, 4, 3, 2],
                sortedList: [9],
                swapNeeded: true,
            },
            {
                listBeforePass: [1, 4, 3, 2],
                listAfterPass: [1, 3, 2],
                sortedList: [4, 9],
                swapNeeded: true,
            },
            {
                listBeforePass: [1, 3, 2],
                listAfterPass: [1, 2],
                sortedList: [3, 4, 9],
                swapNeeded: true,
            },
            {
                listBeforePass: [1, 2],
                listAfterPass: [1],
                sortedList: [2, 3, 4, 9],
                swapNeeded: false,
            }]);
        });
    });
});
