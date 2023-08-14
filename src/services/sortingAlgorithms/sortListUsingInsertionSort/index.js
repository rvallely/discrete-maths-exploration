const { performance } = require('perf_hooks');

const sortListUsingInsertionSort = (numberList) => {
    const executionStart = performance.now();

    const sortedList = [numberList[0]];
    // The number of iterations needed is one less than the length of the list.
    for (let iteration = 1; iteration < numberList.length; iteration += 1) {
        const number = numberList[iteration];

        let correctPosition;
        /**
         * This loop circles through the elements in sortedList at this time to determine the
         * correct index of the number in sortedList.
         *
         * If the number is smaller than the current element in the sortedList the correct position
         * is the one before that element's index. Otherwise, the current correct position would be
         * after that element.
         *
         * After the loop has completed the correct position is the most recent value of
         * correctPosition and we add the element at the correct position.
         */
        for (let index = 0; index < sortedList.length; index += 1) {
            if (sortedList[index] > number) {
                correctPosition = index;
                break;
            } else {
                correctPosition = index + 1;
            }
        }
        sortedList.splice(correctPosition, 0, number);
    }

    const executionEnd = performance.now();
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time insertionSort: ${executionEnd - executionStart} ms.`,
    );

    return sortedList;
};

module.exports = {
    sortListUsingInsertionSort,
};
