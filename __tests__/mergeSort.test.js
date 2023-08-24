const {
    sortListUsingMergeSort,
    completeIteration,
    recursivelySpiltListInHalf,
} = require('../src/sorting-algorithms/services/sortListUsingMergeSort');

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
                iterations: {
                    splitting,
                    sorting,
                },
            } = sortListUsingMergeSort([7, 4, 10, 8, 5, 7, 3]);
            expect(sortedList).toStrictEqual([3, 4, 5, 7, 7, 8, 10]);
            expect(unsortedList).toStrictEqual([7, 4, 10, 8, 5, 7, 3]);
            expect(inputSize).toBe(7);
            expect(executionTimeMs).toBeGreaterThan(0);
            expect(sorting).toStrictEqual([
                [[7], [4], [10], [8], [5], [7], [3]],
                [[4, 7], [8, 10], [5, 7], [3]],
                [[4, 7, 8, 10], [3, 5, 7]],
                [[3, 4, 5, 7, 7, 8, 10]],
            ]);
            expect(splitting).toStrictEqual([
                [7, 4, 10, 8, 5, 7, 3],
                [
                    [7, 4, 10, 8],
                    [5, 7, 3],
                ],
                [
                    [7, 4],
                    [10, 8],
                    [5, 7],
                    [3],
                ],
                [
                    [7], [4], [10], [8], [5], [7], [3],
                ],
            ]);
            expect(sortListUsingMergeSort([4, 3, 7, 9, 1, 0, 4]).sortedList).toStrictEqual([0, 1, 3, 4, 4, 7, 9]);
        });
    });
});
describe('#recursivelySpiltListInHalf', () => {
    describe('given a list of numbers', () => {
        it('splits the list in half recursively returning each list', () => {
            expect(recursivelySpiltListInHalf([7, 4, 10, 8, 5, 7, 3])).toStrictEqual([
                [7, 4, 10, 8, 5, 7, 3],
                [
                    [7, 4, 10, 8], [5, 7, 3],
                ],
                [
                    [7, 4], [10, 8], [5, 7], [3],
                ],
                [
                    [7], [4], [10], [8], [5], [7], [3],
                ],
            ]);
        });
        expect(recursivelySpiltListInHalf([7, 4, 10, 8, 5, 7])).toStrictEqual([
            [7, 4, 10, 8, 5, 7],
            [
                [7, 4, 10], [8, 5, 7],
            ],
            [
                [7, 4], [10], [8, 5], [7],
            ],
            [
                [7], [4], [10], [8], [5], [7],
            ],
        ]);
    });
});
