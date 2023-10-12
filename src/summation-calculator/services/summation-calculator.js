const { convertToNums } = require('./summation');
const { expDivMult } = require('./summation');

exports.calculateSummation = (n, i, operation) => {
    const convertedOperation = convertToNums(operation);
    const initialValI = Number(i);

    let total = 0;
    for (let index = initialValI; index <= Number(n); index += 1) {
        if (convertedOperation.length === 1) {
            if (convertedOperation[0] === 'i') {
                firstVal = Number(index);
            } else if (convertedOperation[0] === '-i') {
                firstVal = -Number(index);
            } else {
                firstVal = convertedOperation[0];
            }
            total += firstVal;
        } else if (convertedOperation.length > 1) {
            const postExpDivMult = expDivMult([...convertedOperation], index);
            while (postExpDivMult.length !== 1) {
                let firstVal = postExpDivMult[0];
                const secondVal = postExpDivMult[2];
                switch (postExpDivMult[1]) {
                    case '+':
                        firstVal += secondVal;
                        postExpDivMult.splice(0, 3, firstVal);
                        break;
                    case '-':
                        firstVal -= secondVal;
                        postExpDivMult.splice(0, 3, firstVal);
                        break;
                }
            }
            total += postExpDivMult[0];
        }
    }
    return {
        n, i, operation: operation.join(''), total: String(total),
    };
};
