const { performance } = require('perf_hooks');

const sortListUsingInsertionSort = (list) => {
    const executionStart = performance.now();

    const numberList = [...list];
    const iterations = [];

    let valueBeingInserted;
    for (let i = 1; i < numberList.length; i += 1) {
        valueBeingInserted = numberList[i];
        const iteration = {
            valueBeingInserted,
            listBeforePass: JSON.parse(JSON.stringify(numberList)),
            process: [],
        };
        numberList.splice(i, 1);
        iteration.numberListAfterRemovingValueBeingInserted = JSON.parse(JSON.stringify(numberList));

        for (let j = 0; j < i; j += 1) {
            iteration.process.push(`Checking ${valueBeingInserted} against ${numberList[j]}.`);
            if (valueBeingInserted < numberList[j]) {
                iteration.process.push(`${valueBeingInserted} is smaller than ${numberList[j]}.`);
                iteration.process.push(`Inserting at index ${j}.`);
                numberList.splice(j, 0, valueBeingInserted);
                iteration.listAfterPass = JSON.parse(JSON.stringify(numberList));
                break;
            } else if (j === i - 1) {
                iteration.process.push(`Element ${valueBeingInserted} was at the correct index.`);
                iteration.process.push(`Inserting back at index ${i}.`);
                numberList.splice(i, 0, valueBeingInserted);
                iteration.listAfterPass = JSON.parse(JSON.stringify(numberList));
            }
        }
        iterations.push(iteration);
    }
    const executionEnd = performance.now();
    // eslint-disable-next-line no-console

    const executionTimeMs = executionEnd - executionStart;
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time insertionSort: ${executionTimeMs} ms.`,
    );

    return {
        unsortedList: list,
        sortedList: numberList,
        inputSize: list.length,
        executionTimeMs,
        iterations,
    };
};

module.exports = {
    sortListUsingInsertionSort,
};
