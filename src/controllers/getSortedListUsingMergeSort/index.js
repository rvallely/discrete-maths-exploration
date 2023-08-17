const { sortListUsingMergeSort } = require('../../services/sortingAlgorithms/sortListUsingMergeSort');
// const { sortListUsingBubbleSortFaster } = require('../../services/sortingAlgorithms/sortListUsingBubbleSortFaster');

exports.getSortedListUsingMergeSort = (req, res, next) => {
    console.log('*** in controller getSortedListUsingMergeSort ***')
    // check list is valid (all numbers, and not exceeding max length)
    // cleanse list (remove white space)
    try {
        const sortedListData = JSON.stringify(sortListUsingMergeSort(req.body.unsortedList));
        res.status(200).send({ data: sortedListData });
    } catch (err) {
        console.log(err);
    }
};
