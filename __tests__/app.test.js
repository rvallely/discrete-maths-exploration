const request = require('supertest');
const app = require('../src/server');

describe('/base-converter', () => {
    test('Responds with a status 400 and error message \'Please provide three arguments.\'  when passed less than three arguments.', () => {
        const missingArg = { val: '3' };
        return request(app)
            .post('/base-converter')
            .send(missingArg)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Please provide three arguments.');
            });
    });
    test('Responds with a status 400 and error message \'Please provide three arguments.\'  when passed two arguments.', () => {
        const missingArg2 = { val: '3', fromBase: '5', toBase: null };
        return request(app)
            .post('/base-converter')
            .send(missingArg2)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Please provide three arguments.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: true, fromBase: '3', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidFirstArg)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: {}, fromBase: '3', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidFirstArg)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input.');
            });
    });
    test('Responds with status 400 and error message \'Start value must only contain A-Z, a-z, 0-9.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: '20.0', fromBase: '3.2', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidFirstArg)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Start value must only contain A-Z, a-z, 0-9.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '1234', fromBase: '3', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '23789', fromBase: '6', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '237A', fromBase: '10', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 10.', () => {
        const invalidValChar = { val: '23Q7A', fromBase: '26', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 36.', () => {
        const invalidValChar = { val: '136b', fromBase: '37', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 36.', () => {
        const invalidValChar = { val: '234p', fromBase: '51', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidValChar)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooSmall = { val: '10', fromBase: '0', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(fromBaseTooSmall)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooSmall = { val: '10', fromBase: '1', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(fromBaseTooSmall)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooLarge = { val: '10', fromBase: '63', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(fromBaseTooLarge)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: '3', toBase: 23 };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input.');
            });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: '5', toBase: {} };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Invalid input.');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: 'B', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: '3', toBase: 'D' };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: '!', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 400 and error message \'Bases to convert from must be a number between 2-62 (inclusive).\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val: '10', fromBase: '3.0', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(invalidToBaseType)
            .expect(400)
            .then((res) => {
                expect(res.body.msg).toBe('Bases to convert from must be a number between 2-62 (inclusive).');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '10', fromBase: '2', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('2');
                expect(res.body.calcs).toEqual([
                    {
                        newVal: 0,
                        remainder: 2,
                        toBase: '5',
                        val: 2,
                    },
                ]);
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '2211021', fromBase: '3', toBase: '5' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('31214');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '6521', fromBase: '7', toBase: '4' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('210032');
                expect(res.body.calcs).toEqual([
                    {
                        newVal: 579,
                        remainder: 2,
                        toBase: '4',
                        val: 2318,
                    },
                    {
                        newVal: 144,
                        remainder: 3,
                        toBase: '4',
                        val: 579,
                    },
                    {
                        newVal: 36,
                        remainder: 0,
                        toBase: '4',
                        val: 144,
                    },
                    {
                        newVal: 9,
                        remainder: 0,
                        toBase: '4',
                        val: 36,
                    },
                    {
                        newVal: 2,
                        remainder: 1,
                        toBase: '4',
                        val: 9,
                    },
                    {
                        newVal: 0,
                        remainder: 2,
                        toBase: '4',
                        val: 2,
                    },
                ]);
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1547', fromBase: '9', toBase: '10' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('1177');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1001111', fromBase: '2', toBase: '6' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('211');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '12322112', fromBase: '4', toBase: '9' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('42745');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1167542', fromBase: '8', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('121102122202');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '3398221', fromBase: '10', toBase: '7' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('40612231');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '56', fromBase: '32', toBase: '29' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('5L');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '56A', fromBase: '32', toBase: '9' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toEqual('7263');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '2213GHI', fromBase: '24', toBase: '3' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('1000202212121120010');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '781AZ3', fromBase: '36', toBase: '14' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual({
                    convertedValue: '42013691',
                    calcs: [
                        {
                            val: 436761039, toBase: '14', newVal: 31197217, remainder: 1,
                        },
                        {
                            val: 31197217, toBase: '14', newVal: 2228372, remainder: 9,
                        },
                        {
                            val: 2228372, toBase: '14', newVal: 159169, remainder: 6,
                        },
                        {
                            val: 159169, toBase: '14', newVal: 11369, remainder: 3,
                        },
                        {
                            val: 11369, toBase: '14', newVal: 812, remainder: 1,
                        },
                        {
                            val: 812, toBase: '14', newVal: 58, remainder: 0,
                        },
                        {
                            val: 58, toBase: '14', newVal: 4, remainder: 2,
                        },
                        {
                            val: 4, toBase: '14', newVal: 0, remainder: 4,
                        },
                    ],
                });
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '29Bab', fromBase: '40', toBase: '4' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('111303102011');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: 'IABCDzy', fromBase: '62', toBase: '17' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('8BF5D57150');
            });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: 'GHJK523', fromBase: '28', toBase: '60' };
        return request(app)
            .post('/base-converter')
            .send(validRequest)
            .expect(200)
            .then((res) => {
                expect(res.body.convertedValue).toBe('AIQCuh');
            });
    });
});

// describe('/summation-calculator', () => {
//     test('Responds with error message \'Please provide values for n, i and the operation.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'Please provide values for n and i. k is 1 by default.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', operation: '1' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'Please provide values for n and i. k is 1 by default.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ i: '1', operation: '1' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'Please provide values for n and i. k is 1 by default.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: null, i: '1', operation: '1' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'Please provide values for n and i. k is 1 by default.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: null, operation: '1' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'Please provide values for n and i. k is 1 by default.\', when passed a request body that does not contain n, i or operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: null })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Please provide values for n, i and the operation.');
//         }));
//     test('Responds with error message \'n and i must be values between -100 and 100.\', when passed a request body where i is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: 'a', operation: '2i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'n and i must be a number between 1 and 100.\', when passed a request body where n is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: 'ab', i: '1', operation: '2i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'n and i must be values between -100 and 100.\', when passed a request body where i is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '!!2', operation: '2i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'n and i must be values between -100 and 100.\', when passed a request body where i is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '[]', operation: '2i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'n and i must be values between -100 and 100.\', when passed request body where n or i are not in this range.\', .', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '200', i: '5', operation: '2n' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'n and i must be values between -100 and 100.\', when passed request body where n or i are not in this range.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '-200', operation: '2n' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('n and i must be values between -100 and 100.');
//         }));
//     test('Responds with error message \'i must be less than or equal to n.\', when sent a request body that contains values n and i and i is a number greater than n.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '5', operation: '2n' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('i must be less than or equal to n.');
//         }));
//     test('Responds with error message \'i must be less than or equal to n.\', when sent a request body that contains values n and i and i is a number greater than n.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '-5', i: '-2', operation: '2n' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('i must be less than or equal to n.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '2h' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '*2' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '-1 +*-23 -3' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '-1 +-23 -3 ^66+' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '^-1 +-23 -3 ^66+' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '-1.0 +-2.3 -3 ^66' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message \'Operation argument is invalid.\', when sent a request body that contains operation value that is invalid.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '*i+23/i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('Operation argument is invalid.');
//         }));
//     test('Responds with error message\'You cannot divide by 0.\', when passed an operation that includes division of zero.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '0', operation: '2i+23/i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('You cannot divide by zero.');
//         }));
//     test('Responds with error message\'You cannot divide by 0.\', when passed an operation that includes division of zero.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '0', operation: '2/-i' })
//         .expect(400)
//         .then((res) => {
//             expect(res.body.msg).toBe('You cannot divide by zero.');
//         }));
//     test('Responds with msg \'Valid operation\' and a correct sum object, when passed a multi term operaiton.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '1*2' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.msg).toBe('Valid operation.');
//             expect(res.body.sum).toEqual({
//                 n: '2', i: '1', operation: '1*2', total: '4',
//             });
//         }));
//     test('Responds with msg \'Valid operation\' and a correct sum object, when passed a multi term operaiton.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '-1 *-23' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.msg).toBe('Valid operation.');
//             expect(res.body.sum).toEqual({
//                 n: '2', i: '1', operation: '-1*-23', total: '46',
//             });
//         }));
//     test('Responds with correct summation when passed a single term operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '2' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '2', total: '8',
//             });
//         }));
//     test('Responds with correct summation when passed a single term operation of i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: 'i' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: 'i', total: '6',
//             });
//         }));
//     test('Responds with correct summation when passed a single term operation of -i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '-i' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '-i', total: '-6',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '1 + 2' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '1+2', total: '12',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '2- 1' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '2-1', total: '4',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '1 + 2 /4-1' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '1+2/4-1', total: '2',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '-1 + 2 /4-1* 5' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '-1+2/4-1*5', total: '-22',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation that involves exponentiation.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '-1 ^-6+ 2 /4-1* 5' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '-1^-6+2/4-1*5', total: '-22',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation that involves i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '2i+3' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '2*i+3', total: '24',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation that involves i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '-2i+3^3-1*0+2' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '-2*i+3^3-1*0+2', total: '104',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation that involves -i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '3', i: '0', operation: '-i +-4 /3^5' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '3', i: '0', operation: '-i+-4/3^5', total: '-6.065843621399177',
//             });
//         }));
//     test('Responds with correct summation when passed a multi term operation that involves i.', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '2', i: '1', operation: '2i+23/i' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '2', i: '1', operation: '2*i+23/i', total: '40.5',
//             });
//         }));
//     test('Responds with correct summation when passed values i and n that are both minus numbers', () => request(app)
//         .post('/summation-calculator')
//         .send({ n: '-3', i: '-7', operation: '2i+23/i' })
//         .expect(200)
//         .then((res) => {
//             expect(res.body.sum).toEqual({
//                 n: '-3', i: '-7', operation: '2*i+23/i', total: '-75.13571428571429',
//             });
//         }));
// });
