const { performance } = require('perf_hooks');

const getSmallestElementAndRemainingList = (numberList) => {
    const remainingList = [];

    while (numberList.length > 1) {
        if (numberList[0] > numberList[1]) {
            console.log('smaller: ', numberList[1]);
        } else {
            console.log('smaller: ', numberList[0]);
        }
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

const sortListUsingSelectionSort = (numberList, sortedList = []) => {
    console.log('numberList: ', numberList);
    console.log('sortedList: ', sortedList);
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

    return sortListUsingSelectionSort(remainingList, sortedList.concat([smallestElement]));
};

module.exports = {
    sortListUsingSelectionSort,
};
