test('my first test', () => {
  const data = 10;
  expect(data).toBe(10);
});

describe('my second test', () => {
  function sum(a, b) {
    return a + b;
  }

  it('should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('also should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

test('API endpoint returns expected response', async () => {
  const response = await fetch('https://codebuddy.review/posts');
  const data = await response.json();

  expect(data.data).toBe(Object);
  // expect(data).toHaveProperty('field1');
  // expect(data.field1).toEqual('expectedValue');
});
