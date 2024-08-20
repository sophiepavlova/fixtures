const fs = require('fs');
const reverse = require('../src/index.js');
// import path from 'path';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse long text', () => {
  // TODO: здесь будет чтение файла и запись его содержимого в константу
  const text = fs
    .readFileSync(`${__dirname}/../__fixtures__/orig_text.txt`, 'utf-8')
    .trim();
  const result = fs
    .readFileSync(`${__dirname}/../__fixtures__/result.txt`, 'utf-8')
    .trim();

  expect(reverse(text)).toEqual(result);
});
