const { performance } = require('perf_hooks');

const completeIteration = (listOfLists) => {
    const nextIteration = [];
    for (let i = 0; i < listOfLists.length; i += 2) {
        const innerSortedList = [];
        // While either of the adjacent innerLists being compared have a value, keep adding to innerSortedList.
        while (listOfLists[i].length > 0 || listOfLists[i + 1].length > 0) {
            let smallerElement;
            // If both lists being compared have an element at index 0...
            if (listOfLists[i][0] && listOfLists[i + 1][0]) {
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

const mergeSort = (numberList) => {
    const executionStart = performance.now();

    const listOfLists = numberList.map((number) => [number]);

    let sortingComplete;
    let listsToSort = listOfLists;
    while (!sortingComplete) {
        /**
         * We always need to compare each inner list to another, even if it is empty. So if there
         * are an odd number of inner lists, and empty list is added to the end.
         */
        if (listsToSort.length % 2 !== 0) {
            listsToSort.push([]);
        }

        const nextIteration = completeIteration(listsToSort);

        /**
         * If the nextIteration has more than one inner list it means there are more elements to
         * put in order and the sorting needs to continue.
         */
        sortingComplete = !(nextIteration.length > 1);
        listsToSort = nextIteration;
    }

    const executionEnd = performance.now();
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time mergeSort: ${executionEnd - executionStart} ms.`,
    );

    /**
     * Otherwise, the sorting is complete and we return the single element of the list which is
     * the fully sorted list.
     */
    return listsToSort[0];
};

module.exports = {
    completeIteration,
    mergeSort,
};
