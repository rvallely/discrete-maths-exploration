const { performance } = require('perf_hooks');

const completeIteration = (listOfLists) => {
    const nextIteration = [];
    for (let i = 0; i < listOfLists.length; i += 2) {
        const innerSortedList = [];
        // While either of the adjacent innerLists being compared have a value, keep adding to innerSortedList.
        while (listOfLists[i].length > 0 || listOfLists[i + 1].length > 0) {
            let smallerElement;
            // If both lists being compared have an element at index 0...
            if (typeof listOfLists[i][0] === 'number' && typeof listOfLists[i + 1][0] === 'number') {
                // ...find the smaller element.
                listOfLists[i][0] < listOfLists[i + 1][0]
                    ? [smallerElement] = listOfLists[i].splice(0, 1)
                    : [smallerElement] = listOfLists[i + 1].splice(0, 1);
            // Otherwise, the smaller element is the first element that is defined of the two lists.
            } else {
                listOfLists[i][0]
                    ? [smallerElement] = listOfLists[i].splice(0, 1)
                    : [smallerElement] = listOfLists[i + 1].splice(0, 1);
            }
            // Add the smaller element to innerSortedList.
            innerSortedList.push(smallerElement);
        }
        /**
         * Push the innerSortedList (created from sorting the original two inner lists) to the
         * nextIteration array which is returned when all original lists in listOfLists are sorted.
         */
        nextIteration.push(innerSortedList);
    }
    return nextIteration;
};

const splitListInHalf = (list) => {
    const iteration = [];

    if (typeof list[0] === 'number') {
        iteration.push(list.slice(0, Math.ceil(list.length / 2)));
        iteration.push(list.slice(Math.ceil(list.length / 2)));
    } else {
        list.forEach((arr) => {
            if (arr.length > 1) {
                iteration.push(arr.slice(0, Math.ceil(arr.length / 2)));
                iteration.push(arr.slice(Math.ceil(arr.length / 2)));
            } else {
                iteration.push(arr);
            }
        });
    }
    return iteration;
};

const recursivelySpiltListInHalf = (list) => {
    const iterations = [list];

    // while the last element of iterations is not a list of arrays and has a length === originalList length
    while (!(
        iterations[iterations.length - 1].length === list.length
        && Array.isArray(iterations[iterations.length - 1][0])
    )
    ) {
        iterations.push(splitListInHalf(iterations[iterations.length - 1]));
    }
    return iterations;
};

const sortListUsingMergeSort = (numberList) => {
    const executionStart = performance.now();

    if (numberList.length === 1) {
        const executionEnd = performance.now();
        const executionTimeMs = executionEnd - executionStart;
        // eslint-disable-next-line no-console
        console.log(
            `Input size: ${numberList.length}.\n
        Execution time mergeSort: ${executionTimeMs} milliseconds.`,
        );

        return {
            unsortedList: [...numberList],
            sortedList: [...numberList],
            inputSize: numberList.length,
            executionTimeMs,
            iterations: {
                splitting: [...numberList],
                sorting: [...numberList],
            },
        };
    }

    const listSplittingProcess = recursivelySpiltListInHalf(numberList);

    const listSplittingProcessSnapshot = JSON.parse(JSON.stringify(listSplittingProcess));
    let listsToSort = listSplittingProcess[listSplittingProcess.length - 1];

    const sortingSteps = [JSON.parse(JSON.stringify(listsToSort))];
    while (listsToSort.length > 1) {
        /**
             * We always need to compare each inner list to another, even if it is empty. So if there
             * are an odd number of inner lists, and empty list is added to the end.
             */
        if (listsToSort.length % 2 !== 0) {
            listsToSort.push([]);
        }

        const nextIteration = completeIteration(listsToSort);
        sortingSteps.push(JSON.parse(JSON.stringify(nextIteration)));
        /**
                 * If the nextIteration has more than one inner list it means there are more elements to
                 * put in order and the sorting needs to continue.
                 */
        listsToSort = nextIteration;
    }

    const executionEnd = performance.now();
    const executionTimeMs = executionEnd - executionStart;
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
            Execution time mergeSort: ${executionTimeMs} milliseconds.`,
    );

    /**
         * Otherwise, the sorting is complete and we return the single element of the list which is
         * the fully sorted list.
         */
    return {
        unsortedList: [...numberList],
        sortedList: listsToSort[0],
        inputSize: numberList.length,
        executionTimeMs,
        iterations: {
            splitting: listSplittingProcessSnapshot,
            sorting: sortingSteps,
        },
    };
};

module.exports = {
    completeIteration,
    sortListUsingMergeSort,
    recursivelySpiltListInHalf,
};
