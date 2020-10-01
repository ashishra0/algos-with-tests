const HelloWorld = require('./index.js');

test('HelloWorld function exists', () => {
  expect(typeof HelloWorld).toEqual('function');
});

test('HelloWorld should return "Hello, World!"', () => {
  const result = HelloWorld();
  expect(result).toBe('Hello, World!');
});