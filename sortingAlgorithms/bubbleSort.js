const { performance } = require('perf_hooks');

const completeBubbleSortIteration = (numberList) => {
    const numberListCopy = numberList;
    let swapNeeded = false;
    const newList = numberListCopy.map((number, index) => {
        /**
         * If the left number of two adjacent numbers is bigger than the right, the two numbers are
         * swapped and the correct number is returned.
         */
        if (number > numberListCopy[index + 1]) {
            numberListCopy[index] = numberListCopy[index + 1];
            numberListCopy[index + 1] = number;

            swapNeeded = true;
        }
        return numberListCopy[index];
    });
    return {
        swapNeeded,
        newList,
    };
};

const bubbleSort = (numberList) => {
    const executionStart = performance.now();

    let inOrder;
    let listIteration = numberList;
    while (!inOrder) {
        const {
            newList,
            swapNeeded,
        } = completeBubbleSortIteration(listIteration);

        listIteration = newList;
        inOrder = swapNeeded === false;
    }

    const executionEnd = performance.now();
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time bubbleSort: ${executionEnd - executionStart} ms.`,
    );

    return listIteration;
};

module.exports = {
    completeBubbleSortIteration,
    bubbleSort,
};
