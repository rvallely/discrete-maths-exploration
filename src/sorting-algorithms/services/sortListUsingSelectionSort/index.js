const { performance } = require('perf_hooks');

const sortListUsingSelectionSort = (orginalNumberList) => {
    const numberList = [...orginalNumberList];
    const executionStart = performance.now();

    const iterations = [];
    for (let i = 0; i < numberList.length - 1; i += 1) {
        const iteration = {
            listBeforePass: JSON.parse(JSON.stringify(numberList)),
            process: [],
        };

        let lowestValueIndex = i;
        iteration.indexToHaveSortedValueAssigned = i;
        for (let j = i; j < numberList.length; j += 1) {
            iteration.process.push(
                `Checking ${numberList[j]} against current lowest value ${numberList[lowestValueIndex]}.`,
            );
            if (numberList[j] < numberList[lowestValueIndex]) {
                iteration.process.push(`${numberList[j]} is smaller than ${numberList[lowestValueIndex]}`);
                iteration.process.push(`New lowest value is ${numberList[j]} at index ${j}.`);
                lowestValueIndex = j;
            }
        }
        if (lowestValueIndex === i) {
            iteration.process.push(
                `Lowest value is still ${numberList[i]} at index ${lowestValueIndex}. No swap is needed.`,
            );
        } else {
            const bigger = numberList[i];
            const smaller = numberList[lowestValueIndex];

            iteration.process.push(`Swapping ${numberList[i]} at index ${i} with ${numberList[lowestValueIndex]}\
             at index ${lowestValueIndex}.`);
            numberList[i] = smaller;
            numberList[lowestValueIndex] = bigger;
        }
        iteration.listAfterPass = (JSON.parse(JSON.stringify(numberList)));
        iterations.push(iteration);
    }

    const executionEnd = performance.now();
    const executionTimeMs = executionEnd - executionStart;

    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time selectionSort: ${executionTimeMs} ms.`,
    );

    return {
        unsortedList: orginalNumberList,
        sortedList: numberList,
        inputSize: orginalNumberList.length,
        executionTimeMs,
        iterations,
    };
};

module.exports = {
    sortListUsingSelectionSort,
};
