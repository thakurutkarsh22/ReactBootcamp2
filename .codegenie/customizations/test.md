# Testing Practices Cheat Sheet

## Libraries and Frameworks

- Jest: Primary testing framework
- Mockito: Mocking library for Java
- PowerMock: Extended mocking capabilities for static methods and constructors

## Mocking and Stubbing

### Jest Mocks

```javascript
jest.mock('module-name');
const mockFunction = jest.fn();
```

### Mockito Mocks

```java
@Mock
private DependencyClass mockDependency;

when(mockDependency.method()).thenReturn(expectedValue);
```

### PowerMock for Static Methods

```java
@PrepareForTest(StaticClass.class)
PowerMockito.mockStatic(StaticClass.class);
PowerMockito.when(StaticClass.staticMethod()).thenReturn(expectedValue);
```

## Fake Implementations

### In-Memory Repositories

```java
public class InMemoryUserRepository implements UserRepository {
    private Map<String, User> users = new HashMap<>();

    @Override
    public User findById(String id) {
        return users.get(id);
    }

    // Other methods...
}
```

### Test Doubles

```javascript
const fakeApiClient = {
  fetchData: jest.fn().mockResolvedValue({ data: 'mocked data' })
};
```

## Test Structure

### Arrange-Act-Assert (AAA) Pattern

```javascript
test('should do something', () => {
  // Arrange
  const input = 'test';
  const expectedOutput = 'TEST';

  // Act
  const result = someFunction(input);

  // Assert
  expect(result).toBe(expectedOutput);
});
```

## Test Coverage

- Use Jest's built-in coverage reporting
- Aim for high coverage, especially in critical paths

```
jest --coverage
```

## Parameterized Tests

### Jest

```javascript
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) should return %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});
```

### JUnit

```java
@ParameterizedTest
@CsvSource({
    "1, 1, 2",
    "1, 2, 3",
    "2, 1, 3"
})
void testAdd(int a, int b, int expected) {
    assertEquals(expected, MathUtils.add(a, b));
}
```

## Asynchronous Testing

### Jest

```javascript
test('async operation', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expectedValue);
});
```

## Error Handling Tests

```javascript
test('should throw an error', () => {
  expect(() => {
    throwingFunction();
  }).toThrow(ExpectedError);
});
```

## Integration Tests

- Use `@SpringBootTest` for Spring Boot applications
- Mock external dependencies and use in-memory databases

## Best Practices

1. Write descriptive test names
2. Use setup and teardown methods for common test configurations
3. Avoid test interdependence
4. Keep tests focused and concise
5. Use appropriate assertions for different data types and scenarios
6. Regularly run and maintain tests