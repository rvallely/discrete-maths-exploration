const { sortListUsingBubbleSort } = require('../../services/sortListUsingBubbleSort');
const { sortListUsingBubbleSortFaster } = require('../../services/sortListUsingBubbleSortFaster');
const { sortListUsingInsertionSort } = require('../../services/sortListUsingInsertionSort');
const { sortListUsingMergeSort } = require('../../services/sortListUsingMergeSort');
const { sortListUsingQuickSort } = require('../../services/sortListUsingQuickSort');
const { sortListUsingSelectionSort } = require('../../services/sortListUsingSelectionSort');
const { SortingAlgorithmName } = require('../../types');

const checkListValid = (unsortedList) => (/^[0-9, ]*$/.test(unsortedList) === true
    ? {
        listValid: true,
        message: 'Input list is valid.',
    }
    : {
        listValid: false,
        message: 'Input list must only contain numbers, commas, and spaces.',
    });

const findRelevantSortingAlgorithmFunction = (sortingAlgoName) => {
    switch (sortingAlgoName) {
        case SortingAlgorithmName.BUBBLE_SORT:
            return sortListUsingBubbleSort;
        case SortingAlgorithmName.BUBBLE_SORT_FASTER:
            return sortListUsingBubbleSortFaster;
        case SortingAlgorithmName.MERGE_SORT:
            return sortListUsingMergeSort;
        case SortingAlgorithmName.QUICK_SORT:
            return sortListUsingQuickSort;
        case SortingAlgorithmName.INSERTION_SORT:
            return sortListUsingInsertionSort;
        case SortingAlgorithmName.SELECTION_SORT:
            return sortListUsingSelectionSort;
        default:
            return undefined;
    }
};

const getSortedList = ({ body: { unsortedList, sortingAlgoName } }, res, next) => {
    const { listValid, message } = checkListValid(unsortedList);
    if (!listValid) {
        return Promise.reject({ status: 400, msg: message })
            .catch((err) => {
                next(err);
            });
    }
    const relevantSortingAlgorithmFunction = findRelevantSortingAlgorithmFunction(sortingAlgoName);

    if (!relevantSortingAlgorithmFunction) {
        return Promise.reject({ status: 404, msg: `Function not found for ${sortingAlgoName}.`})
            .catch((err) => {
                next(err);
            });
    }
    const cleansedInput = unsortedList.replace(' ', '').split(',').map((num) => Number(num));

    return res.status(200).send(
        {
            data: JSON.stringify(
                relevantSortingAlgorithmFunction(cleansedInput),
            ),
        },
    );
};

module.exports = {
    getSortedList,
    checkListValid,
};
