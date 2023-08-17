const { sortListUsingBubbleSortFaster } = require('../../services/sortingAlgorithms/sortListUsingBubbleSortFaster');
// const { sortListUsingBubbleSortFaster } = require('../../services/sortingAlgorithms/sortListUsingBubbleSortFaster');

exports.getSortedListUsingBubbleSortFaster = (req, res, next) => {
    console.log('*** in controller getSortedListUsingBubbleSortFaster ***')
    // check list is valid (all numbers, and not exceeding max length)
    // cleanse list (remove white space)
    const sortedListData = sortListUsingBubbleSortFaster(req.body.unsortedList);
    res.status(200).send({ data: sortedListData });
};
