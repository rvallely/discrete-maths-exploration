const { mergeSort, completeIteration } = require('../mergeSort');

describe('#completeIteration', () => {
    describe('', () => {
        it('dg', () => {
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
describe('#mergeSort', () => {
    describe('given a list of numbers', () => {
        it('returns them sorted (asc -> desc)', () => {
            expect(mergeSort([7, 3, 10, 6, 4, 8, 5, 7])).toStrictEqual([3, 4, 5, 6, 7, 7, 8, 10]);
            expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
            expect(mergeSort([1])).toStrictEqual([1]);
            expect(mergeSort([1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1]);
        });
    });
});
