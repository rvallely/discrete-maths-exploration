const request = require('supertest');
const app = require('../server.js');

describe('/base-converter', () => {
    test('Responds with a status 400 and error message \'Please provide three arguments.\'  when passed less than three arguments.', () => {
        const missingArg = { val: '3' };
        return request(app)
        .get('/base-converter')
        .send(missingArg)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Please provide three arguments.');
        });
    });
    test('Responds with a status 400 and error message \'Please provide three arguments.\'  when passed two arguments.', () => {
        const missingArg2 = { val: '3', fromBase: '5', toBase: null };
        return request(app)
        .get('/base-converter')
        .send(missingArg2)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Please provide three arguments.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: true, fromBase: '3', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidFirstArg)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: {}, fromBase: '3', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidFirstArg)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        const invalidFirstArg = { val: '20.0', fromBase: '3.2', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidFirstArg)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '1234', fromBase: '3', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '23789', fromBase: '6', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is under 11.', () => {
        const invalidValChar = { val: '237A', fromBase: '10', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 10.', () => {
        const invalidValChar = { val: '23Q7A', fromBase: '26', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 36.', () => {
        const invalidValChar = { val: '136b', fromBase: '37', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input: value to convert contains characters not present in the base system converting from.\' when passed a value as the first argument that contains digits not present in base system. When original base is over 36.', () => {
        const invalidValChar = { val: '234p', fromBase: '51', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(invalidValChar)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input: value to convert contains characters not present in the base system converting from.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooSmall = { val:'10', fromBase: '0', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(fromBaseTooSmall)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooSmall = { val:'10', fromBase: '1', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(fromBaseTooSmall)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const fromBaseTooLarge = { val:'10', fromBase: '63', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(fromBaseTooLarge)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val:'10', fromBase: '3', toBase: 23 };
        return request(app)
        .get('/base-converter')
        .send(invalidToBaseType)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 400 and error message \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () => {
        const invalidToBaseType = { val:'10', fromBase: '5', toBase: {} };
        return request(app)
        .get('/base-converter')
        .send(invalidToBaseType)
        .expect(400)
        .then((res) => {
            expect(res.body.msg).toBe('Invalid input.');
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '10', fromBase: '2', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '2' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '2211021', fromBase: '3', toBase: '5' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '31214' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '6521', fromBase: '7', toBase: '4' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '210032' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1547', fromBase: '9', toBase: '10' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '1177' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1001111', fromBase: '2', toBase: '6' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '211' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '12322112', fromBase: '4', toBase: '9' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '42745' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '1167542', fromBase: '8', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '121102122202' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments 10 or under.', () => {
        const validRequest = { val: '3398221', fromBase: '10', toBase: '7' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '40612231' });
        });
    });
    ////
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '56', fromBase: '32', toBase: '29' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '5L' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '56A', fromBase: '32', toBase: '9' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '7263' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '2213GHI', fromBase: '24', toBase: '3' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '1000202212121120010' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '781AZ3', fromBase: '36', toBase: '14' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '42013691' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: '29Bab', fromBase: '40', toBase: '4' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '111303102011' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: 'IABCDzy', fromBase: '62', toBase: '17' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: '8BF5D57150' });
        });
    });
    test('Responds with status 200 and correct base conversion when passed valid request data and fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        const validRequest = { val: 'GHJK523', fromBase: '28', toBase: '60' };
        return request(app)
        .get('/base-converter')
        .send(validRequest)
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({ convertedValue: 'AIQCuh' });
        });
    });
});