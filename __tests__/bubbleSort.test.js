const {
    sortListUsingBubbleSort,
    completeBubbleSortIteration,
} = require('../src/services/sortingAlgorithms/sortListUsingBubbleSort');

describe('#completeBubbleSortIteration', () => {
    describe('given a list of numbers', () => {
        it('returns the list of numbers after one pass through of sorting', () => {
            const numberList = [7, 3, 10, 6, 4, 8, 5, 7];

            const firstIteration = completeBubbleSortIteration(numberList);
            const secondIteration = completeBubbleSortIteration([...firstIteration.newList]);
            const thirdIteration = completeBubbleSortIteration([...secondIteration.newList]);
            const fourthIteration = completeBubbleSortIteration([...thirdIteration.newList]);
            const fifthIteration = completeBubbleSortIteration([...fourthIteration.newList]);

            expect(firstIteration.newList).toStrictEqual([3, 7, 6, 4, 8, 5, 7, 10]);
            expect(firstIteration.swapNeeded).toBe(true);
            expect(secondIteration.newList).toStrictEqual([3, 6, 4, 7, 5, 7, 8, 10]);
            expect(secondIteration.swapNeeded).toBe(true);
            expect(thirdIteration.newList).toStrictEqual([3, 4, 6, 5, 7, 7, 8, 10]);
            expect(thirdIteration.swapNeeded).toBe(true);
            expect(fourthIteration.newList).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            expect(fourthIteration.swapNeeded).toBe(true);
            expect(fifthIteration.newList).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            expect(fifthIteration.swapNeeded).toBe(false);
        });
    });
});

describe('#sortListUsingBubbleSort', () => {
    describe('given a list of numbers', () => {
        it('returns a value for sortedList sorted (asc -> desc)', () => {
            const {
                unsortedList,
                sortedList,
                inputSize,
                executionTimeMs,
                iterations,
            } = sortListUsingBubbleSort([7, 3, 10, 6, 4, 8, 5, 7]);

            expect(unsortedList).toStrictEqual([7, 3, 10, 6, 4, 8, 5, 7]);
            expect(sortedList).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            expect(inputSize).toStrictEqual(unsortedList.length);
            expect(typeof executionTimeMs).toBe('number');
            expect(iterations).toStrictEqual([{
                listAfterPass: [3, 7, 6, 4, 8, 5, 7, 10],
                swapNeeded: true,
            },
            {
                listAfterPass: [3, 6, 4, 7, 5, 7, 8, 10],
                swapNeeded: true,
            },
            {
                listAfterPass: [3, 4, 6, 5, 7, 7, 8, 10],
                swapNeeded: true,
            },
            {
                listAfterPass: [3, 4, 5, 6, 7, 7, 8, 10],
                swapNeeded: true,
            },
            {
                listAfterPass: [3, 4, 5, 6, 7, 7, 8, 10],
                swapNeeded: false,
            }]);
        });
    });
});
