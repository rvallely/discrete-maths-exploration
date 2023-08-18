const { sortListUsingBubbleSort } = require('../../services/sortingAlgorithms/sortListUsingBubbleSort');

exports.getSortedListUsingBubbleSort = (req, res, next) => {
    console.log('in the bubble sort controller')
    // check list is valid (all numbers, and not exceeding max length)
    // cleanse list (remove white space)
    const sortedListData = sortListUsingBubbleSort(req.body.unsortedList);
    console.log(sortedListData, '<<< sortedListData');
    res.status(200).send({ data: sortedListData });
    console.log(res, '<<< response');
};
