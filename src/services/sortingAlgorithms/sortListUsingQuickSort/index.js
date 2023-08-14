const { v4: uuid } = require('uuid');
const { performance } = require('perf_hooks');

const generateNode = (nodeType, { fullList, previousNodeName }) => {
    const list = [...fullList];
    const pivot = list.splice([...list].length - 1, 1)[0];

    return {
        name: uuid(),
        fullList,
        unorderedList: list,
        pivot,
        previousNode: {
            name: nodeType === 'first' ? undefined : previousNodeName,
            position: nodeType === 'first' ? undefined : nodeType,
        },
        sortedList: [pivot],
    };
};

const getNextNodes = (priorNode) => {
    const nextNodes = [];

    const leftNodeFullList = [];
    const rightNodeFullList = [];
    priorNode.unorderedList.forEach(
        (number) => (number <= priorNode.pivot
            ? leftNodeFullList.push(number)
            : rightNodeFullList.push(number)),
    );

    if (leftNodeFullList.length) {
        nextNodes.push(generateNode(
            'left',
            {
                fullList: leftNodeFullList,
                previousNodeName: priorNode.name,
            },
        ));
    }
    if (rightNodeFullList.length) {
        nextNodes.push(generateNode(
            'right',
            {
                fullList: rightNodeFullList,
                previousNodeName: priorNode.name,
            },
        ));
    }

    return nextNodes;
};

const getNextLayer = (previousLayer) => previousLayer.reduce((layer, previousLayerNode) => layer.concat(getNextNodes(previousLayerNode)), []);

const getLayers = (list) => {
    const layer0 = [generateNode('first', { fullList: list })];

    let layerNumber = 0;
    let currentLayer = layer0;
    let layers = {
        [layerNumber]: layer0,
    };
    /**
     * If the current layer has any node that has values in its unorderedList property, it means
     * there are still nodes needing to be created for the remaining numbers. If no are nodes in the
     * current layer have values in their unorderedList property it means all numbers from the
     * original list have been placed in the tree and we can begin the next stage of sorting
     * into a final sorted list.
     */
    while (currentLayer.find((node) => node.unorderedList.length)) {
        const nextLayerNumber = layerNumber + 1;
        const nextLayer = getNextLayer(currentLayer, nextLayerNumber);
        layers = {
            ...layers,
            [nextLayerNumber]: nextLayer,
        };
        currentLayer = nextLayer;
        layerNumber = nextLayerNumber;
    }
    return layers;
};

const getSortedListFromLayers = (layers) => {
    for (let i = Object.keys(layers).length - 1; i >= 0; i -= 1) {
        if (i === 0) {
            break;
        } else {
            for (currentNode of layers[i]) {
                const parentNodeIndex = layers[i - 1].findIndex(
                    (node) => node.name === currentNode.previousNode.name,
                );

                currentNode.previousNode.position === 'left'
                    ? layers[i - 1][parentNodeIndex].sortedList = currentNode
                        .sortedList
                        .concat(layers[i - 1][parentNodeIndex].sortedList)
                    : layers[i - 1][parentNodeIndex].sortedList = layers[i - 1][parentNodeIndex]
                        .sortedList
                        .concat(currentNode.sortedList);
            }
        }
    }

    return layers[0][0].sortedList;
};

const sortListUsingQuickSort = (numberList) => {
    const executionStart = performance.now();

    const sortedList = getSortedListFromLayers(getLayers(numberList));

    const executionEnd = performance.now();
    // eslint-disable-next-line no-console
    console.log(
        `Input size: ${numberList.length}.\n
        Execution time quickSort: ${executionEnd - executionStart} ms.`,
    );

    return sortedList;
};

module.exports = {
    getLayers,
    getSortedListFromLayers,
    sortListUsingQuickSort,
};
