const { sortListUsingBubbleSort } = require('../../services/sortingAlgorithms/sortListUsingBubbleSort');

exports.getSortedListUsingBubbleSort = (req, res, next) => {
    // check list is valid (all numbers, and not exceeding max length)
    // cleanse list (remove white space)
    const sortedListData = sortListUsingBubbleSort(req.body.unsortedList);
    res.status(200).send({ data: sortedListData });
};
