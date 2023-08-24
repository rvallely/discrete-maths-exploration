const { performance } = require('perf_hooks');
const { completeBubbleSortIteration } = require('../sortListUsingBubbleSort/index');

const sortListUsingBubbleSortFaster = (numberList) => {
    const executionStart = performance.now();

    let inOrder;
    let listIteration = [...numberList];
    const sortedList = [];
    const iterations = [];

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

        if (!iterations.length) {
            iterations.push({
                listBeforePass: [...numberList],
                listAfterPass: [...newList],
                sortedList: [...sortedList],
                swapNeeded,
            });
        } else {
            iterations.push({
                listBeforePass: iterations[iterations.length - 1].listAfterPass,
                listAfterPass: [...newList],
                sortedList: [...sortedList],
                swapNeeded,
            });
        }

        inOrder = swapNeeded === false;
    }

    const executionEnd = performance.now();

    const executionTimeMs = executionEnd - executionStart;
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time bubbleSortFaster: ${executionTimeMs} ms.`,
    );

    /**
     * If a swap wasn't needed in a bubble sort iteration it means the list is in order and we
     * can join to the beginning of sortedList.
     */
    return {
        unsortedList: [...numberList],
        sortedList: [...listIteration.concat(sortedList)],
        inputSize: numberList.length,
        executionTimeMs,
        iterations,
    };
};

module.exports = {
    sortListUsingBubbleSortFaster,
};
