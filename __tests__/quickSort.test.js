/* eslint-disable camelcase */
const {
    getLayers,
    getSortedListFromLayers,
    sortListUsingQuickSort,
} = require('../src/services/sortingAlgorithms/sortListUsingQuickSort');

describe('#getLayers', () => {
    describe('given an array of numbers', () => {
        describe('test 1: \n [4, 6, 1, 2, 3]', () => {
            const result1 = getLayers([4, 6, 1, 2, 3]);
            it('generates correct number of layers', () => {
                const numberOfLayers = Object.keys(result1).length;

                expect(numberOfLayers).toBe(3);
            });
            it('generates correct number of nodes in each layer', () => {
                const layer_0 = result1['0'];
                const layer_1 = result1['1'];
                const layer_2 = result1['2'];

                expect(layer_0.length).toBe(1);
                expect(layer_1.length).toBe(2);
                expect(layer_2.length).toBe(2);
            });
            it('generates correct values for each node on each layer', () => {
                expect(result1['0'][0].fullList).toEqual([4, 6, 1, 2, 3]);
                expect(result1['0'][0].unorderedList).toEqual([4, 6, 1, 2]);
                expect(result1['0'][0].pivot).toBe(3);
                expect(result1['0'][0].previousNode.name).toBeUndefined();
                expect(result1['0'][0].previousNode.position).toBeUndefined();
                expect(result1['0'][0].sortedList).toEqual([3]);
                const layer_0_node_0_name = result1['0'][0].name;

                expect(result1['1'][0].fullList).toEqual([1, 2]);
                expect(result1['1'][0].unorderedList).toEqual([1]);
                expect(result1['1'][0].pivot).toBe(2);
                expect(result1['1'][0].previousNode.name).toBe(layer_0_node_0_name);
                expect(result1['1'][0].previousNode.position).toBe('left');
                expect(result1['1'][0].sortedList).toEqual([2]);
                const layer_1_node_0_name = result1['1'][0].name;

                expect(result1['1'][1].fullList).toEqual([4, 6]);
                expect(result1['1'][1].unorderedList).toEqual([4]);
                expect(result1['1'][1].pivot).toBe(6);
                expect(result1['1'][1].previousNode.name).toBe(layer_0_node_0_name);
                expect(result1['1'][1].previousNode.position).toBe('right');
                expect(result1['1'][1].sortedList).toEqual([6]);
                const layer_1_node_1_name = result1['1'][1].name;

                expect(result1['2'][0].fullList).toEqual([1]);
                expect(result1['2'][0].unorderedList).toEqual([]);
                expect(result1['2'][0].pivot).toBe(1);
                expect(result1['2'][0].previousNode.name).toBe(layer_1_node_0_name);
                expect(result1['2'][0].previousNode.position).toBe('left');
                expect(result1['2'][0].sortedList).toEqual([1]);
                const layer_2_node_0_name = result1['2'][0].name;

                expect(result1['2'][1].fullList).toEqual([4]);
                expect(result1['2'][1].unorderedList).toEqual([]);
                expect(result1['2'][1].pivot).toBe(4);
                expect(result1['2'][1].previousNode.name).toBe(layer_1_node_1_name);
                expect(result1['2'][1].previousNode.position).toBe('left');
                expect(result1['2'][1].sortedList).toEqual([4]);
                const layer_2_node_1_name = result1['2'][1].name;

                expect(typeof layer_2_node_0_name).toBe('string');
                expect(typeof layer_2_node_1_name).toBe('string');
            });
        });
        describe('test 2 \n [7, 8, 7, 4, 5, 10, 3]:', () => {
            const result2 = getLayers([7, 8, 7, 4, 5, 10, 3]);
            it('generates correct number of layers', () => {
                const numberOfLayers = Object.keys(result2).length;

                expect(numberOfLayers).toBe(5);
            });
            it('generates correct number of nodes in each layer', () => {
                const layer_0 = result2['0'];
                const layer_1 = result2['1'];
                const layer_2 = result2['2'];
                const layer_3 = result2['3'];
                const layer_4 = result2['4'];

                expect(layer_0.length).toBe(1);
                expect(layer_1.length).toBe(1);
                expect(layer_2.length).toBe(1);
                expect(layer_3.length).toBe(2);
                expect(layer_4.length).toBe(2);
            });
            it('generates correct values for each node on each layer', () => {
                expect(result2['0'][0].fullList).toEqual([7, 8, 7, 4, 5, 10, 3]);
                expect(result2['0'][0].unorderedList).toEqual([7, 8, 7, 4, 5, 10]);
                expect(result2['0'][0].pivot).toBe(3);
                expect(result2['0'][0].previousNode.name).toBeUndefined();
                expect(result2['0'][0].previousNode.position).toBeUndefined();
                expect(result2['0'][0].sortedList).toEqual([3]);
                const layer_0_node_0_name = result2['0'][0].name;

                expect(result2['1'][0].fullList).toEqual([7, 8, 7, 4, 5, 10]);
                expect(result2['1'][0].unorderedList).toEqual([7, 8, 7, 4, 5]);
                expect(result2['1'][0].pivot).toBe(10);
                expect(result2['1'][0].previousNode.name).toBe(layer_0_node_0_name);
                expect(result2['1'][0].previousNode.position).toBe('right');
                expect(result2['1'][0].sortedList).toEqual([10]);
                const layer_1_node_0_name = result2['1'][0].name;

                expect(result2['2'][0].fullList).toEqual([7, 8, 7, 4, 5]);
                expect(result2['2'][0].unorderedList).toEqual([7, 8, 7, 4]);
                expect(result2['2'][0].pivot).toBe(5);
                expect(result2['2'][0].previousNode.name).toBe(layer_1_node_0_name);
                expect(result2['2'][0].previousNode.position).toBe('left');
                expect(result2['2'][0].sortedList).toEqual([5]);
                const layer_2_node_0_name = result2['2'][0].name;

                expect(result2['3'][0].fullList).toEqual([4]);
                expect(result2['3'][0].unorderedList).toEqual([]);
                expect(result2['3'][0].pivot).toBe(4);
                expect(result2['3'][0].previousNode.name).toBe(layer_2_node_0_name);
                expect(result2['3'][0].previousNode.position).toBe('left');
                expect(result2['3'][0].sortedList).toEqual([4]);
                const layer_3_node_0_name = result2['3'][0].name;

                expect(result2['3'][1].fullList).toEqual([7, 8, 7]);
                expect(result2['3'][1].unorderedList).toEqual([7, 8]);
                expect(result2['3'][1].pivot).toBe(7);
                expect(result2['3'][1].previousNode.name).toBe(layer_2_node_0_name);
                expect(result2['3'][1].previousNode.position).toBe('right');
                expect(result2['3'][1].sortedList).toEqual([7]);
                const layer_3_node_1_name = result2['3'][1].name;

                expect(result2['4'][0].fullList).toEqual([7]);
                expect(result2['4'][0].unorderedList).toEqual([]);
                expect(result2['4'][0].pivot).toBe(7);
                expect(result2['4'][0].previousNode.name).toBe(layer_3_node_1_name);
                expect(result2['4'][0].previousNode.position).toBe('left');
                expect(result2['4'][0].sortedList).toEqual([7]);
                const layer_4_node_0_name = result2['4'][0].name;

                expect(result2['4'][1].fullList).toEqual([8]);
                expect(result2['4'][1].unorderedList).toEqual([]);
                expect(result2['4'][1].pivot).toBe(8);
                expect(result2['4'][1].previousNode.name).toBe(layer_3_node_1_name);
                expect(result2['4'][1].previousNode.position).toBe('right');
                expect(result2['4'][1].sortedList).toEqual([8]);
                const layer_4_node_1_name = result2['4'][1].name;

                expect(typeof layer_3_node_0_name).toBe('string');
                expect(typeof layer_4_node_0_name).toBe('string');
                expect(typeof layer_4_node_1_name).toBe('string');
            });
        });
    });
});

describe('#getSortedListFromLayers', () => {
    describe('given a list of layers', () => {
        it('returns the sorted list', () => {
            const sortedList = getSortedListFromLayers(getLayers([4, 6, 1, 2, 3]));
            expect(sortedList).toStrictEqual([1, 2, 3, 4, 6]);
        });
    });
});

describe('#sortListUsingQuickSort', () => {
    describe('given a list of numbers', () => {
        it('returns the sorted list', () => {
            const sortedList1 = sortListUsingQuickSort([4, 6, 1, 2, 3]);
            expect(sortedList1).toStrictEqual([1, 2, 3, 4, 6]);

            const sortedList2 = sortListUsingQuickSort([11, 10, 13, 1, 12, 7, 19, 16, 18, 20]);
            expect(sortedList2).toStrictEqual([1, 7, 10, 11, 12, 13, 16, 18, 19, 20]);

            const sortedList3 = sortListUsingQuickSort(
                [14, 21, 6, 20, 24, 4, 17, 30, 25, 10, 11, 16, 1, 18, 9, 27, 22, 19, 26, 5],
            );
            expect(sortedList3).toStrictEqual(
                [1, 4, 5, 6, 9, 10, 11, 14, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 30],
            );
        });
    });
});
