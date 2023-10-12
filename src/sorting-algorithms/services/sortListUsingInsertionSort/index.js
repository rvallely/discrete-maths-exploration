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
        numberList.splice(i, 1, undefined);
        iteration.numberListAfterRemovingValueBeingInserted = JSON.parse(JSON.stringify(numberList));

        let j = i - 1;
        while (j >= 0) {
            iteration.process.push(`Checking ${valueBeingInserted} against ${numberList[j]}.`);
            if (numberList[j] > valueBeingInserted) {
                iteration.process.push(`${valueBeingInserted} is smaller than ${numberList[j]}.`);
                iteration.process.push(`Moving ${numberList[j]} one place to the right.`);

                numberList[j + 1] = numberList[j];
                numberList[j] = undefined;
                iteration.process.push(JSON.stringify(numberList));
            } else {
                iteration.process.push(`${valueBeingInserted} is bigger than or equal to ${numberList[j]}.`);
                break;
            }
            j -= 1;
        }

        iteration.process.push(`Inserting ${valueBeingInserted} at index ${j + 1}.`);
        numberList.splice(j + 1, 1, valueBeingInserted);
        iteration.process.push(JSON.stringify(numberList));
        iteration.listAfterPass = JSON.parse(JSON.stringify(numberList));

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
