const { convertToNums } = require('../utils/summation.js');
const { expDivMult } = require('../utils/summation.js');

exports.calculateSummation = (n, i, operation) => {
    const convertedOperation = convertToNums(operation);
    const initialValI = Number(i);

    let total = 0;
    for (let i = initialValI; i <= Number(n); i++) {
        if (convertedOperation.length === 1) {
            if (convertedOperation[0] === 'i') {
                firstVal = Number(i);
            } 
            else if (convertedOperation[0] === '-i') {
                firstVal = -Number(i);
            }
            else {
                firstVal = convertedOperation[0];
            }
            total += firstVal;
        } 
        else if (convertedOperation.length > 1) {
            const postExpDivMult = expDivMult([...convertedOperation], i); 
            while (postExpDivMult.length !== 1) {
                let firstVal = postExpDivMult[0];
                let secondVal = postExpDivMult[2];
                switch(postExpDivMult[1]) {
                    case '+':
                        firstVal = firstVal + secondVal;
                        postExpDivMult.splice(0, 3, firstVal);
                        break;
                    case '-':
                        firstVal = firstVal - secondVal;
                        postExpDivMult.splice(0, 3, firstVal);
                        break;
                }
            }
            total += postExpDivMult[0];
        }
    }
    return { n: n, i: i, operation: operation.join(''), total: String(total) };
}
