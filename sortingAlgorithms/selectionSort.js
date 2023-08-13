const { performance } = require('perf_hooks');

const getSmallestElementAndRemainingList = (numberList) => {
    const remainingList = [];

    while (numberList.length > 1) {
        remainingList.push(
            numberList[0] > numberList[1]
                ? numberList.splice(0, 1)[0]
                : numberList.splice(1, 1)[0],
        );
    }

    return {
        remainingList,
        smallestElement: numberList[0],
    };
};

const selectionSort = (numberList, sortedList = []) => {
    const executionStart = performance.now();
    if (numberList.length === 0) {
        const executionEnd = performance.now();

        // eslint-disable-next-line no-console
        console.log(
            `Input size: ${numberList.length}.\n
            Execution time selectionSort: ${executionEnd - executionStart} ms.`,
        );

        return sortedList;
    }
    const {
        remainingList,
        smallestElement,
    } = getSmallestElementAndRemainingList(numberList);

    return selectionSort(remainingList, sortedList.concat([smallestElement]));
};

module.exports = {
    selectionSort,
};
