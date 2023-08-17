const {
    sortListUsingMergeSort,
    completeIteration,
} = require('../src/services/sortingAlgorithms/sortListUsingMergeSort');

describe('#completeIteration', () => {
    describe('given an array of arrays', () => {
        it('completes a merging iteration', () => {
            const firstIteration = [[7], [4], [10], [8], [5], [7], [3], []];
            const secondIteration = [[4, 7], [8, 10], [5, 7], [3]];
            const thirdIteration = [[4, 7, 8, 10], [3, 5, 7]];
            const fourthIteration = [[3, 4, 5, 7, 7, 8, 10]];
            expect(completeIteration(firstIteration)).toStrictEqual(secondIteration);
            expect(completeIteration(secondIteration)).toStrictEqual(thirdIteration);
            expect(completeIteration(thirdIteration)).toStrictEqual(fourthIteration);
        });
    });
});
describe('#sortListUsingMergeSort', () => {
    describe('given a list of numbers', () => {
        it('returns them sorted (asc -> desc)', () => {
            expect(sortListUsingMergeSort(
                [7, 3, 10, 6, 4, 8, 5, 7],
            ).sortedList).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            expect(sortListUsingMergeSort([1, 2, 3, 4]).sortedList).toStrictEqual([1, 2, 3, 4]);
            expect(sortListUsingMergeSort([1]).sortedList).toStrictEqual([1]);
            expect(sortListUsingMergeSort([1, 1, 1, 1, 1]).sortedList).toStrictEqual([1, 1, 1, 1, 1]);
            const {
                unsortedList,
                sortedList,
                inputSize,
                executionTimeMs,
                iterations,
            } = sortListUsingMergeSort([7, 4, 10, 8, 5, 7, 3]);
            expect(sortedList).toStrictEqual([3, 4, 5, 7, 7, 8, 10]);
            expect(unsortedList).toStrictEqual([7, 4, 10, 8, 5, 7, 3]);
            expect(inputSize).toBe(7);
            expect(executionTimeMs).toBeGreaterThan(0);
            expect(iterations).toStrictEqual([
                [[7], [4], [10], [8], [5], [7], [3]],
                [[4, 7], [8, 10], [5, 7], [3]],
                [[4, 7, 8, 10], [3, 5, 7]],
                [[3, 4, 5, 7, 7, 8, 10]],
            ]);
        });
    });
});
