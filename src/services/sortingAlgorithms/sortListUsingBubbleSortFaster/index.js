const { performance } = require('perf_hooks');
const { completeBubbleSortIteration } = require('../sortListUsingBubbleSort/index');

const sortListUsingBubbleSortFaster = (numberList) => {
    const executionStart = performance.now();

    let inOrder;
    let listIteration = numberList;
    const sortedList = [];

    while (!inOrder) {
        const {
            newList,
            swapNeeded,
        } = completeBubbleSortIteration(listIteration);

        /**
         * The largest element is at the end of the list after each iteration. It is removed and
         * added to the start of sortedList.
         */
        const [largestElementInlistIteration] = newList.splice(newList.length - 1, 1);

        listIteration = newList;
        sortedList.unshift(largestElementInlistIteration);

        console.log('newList: ', newList);
        console.log('swapNeeded: ', swapNeeded);
        console.log('sortedList: ', sortedList);
        inOrder = swapNeeded === false;
    }

    const executionEnd = performance.now();
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time bubbleSortFaster: ${executionEnd - executionStart} ms.`,
    );

    /**
     * If a swap wasn't needed in a bubble sort iteration it means the list is in order and we
     * can join to the beginning of sortedList.
     */
    return listIteration.concat(sortedList);
};

module.exports = {
    sortListUsingBubbleSortFaster,
};
