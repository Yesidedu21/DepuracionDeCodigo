const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

/** Tarea 1 Completada */

test('Dividir -12 / 3 to equal -4', () => {
  expect(calculator.divide(-12, 3)).toBe(-4);
});

test('Dividir 25 / 2.5 to equal 10', () => {
  expect(calculator.divide(25, 2.5)).toBe(10);
});

test('Multiplicar 85 * -10 to equal -850', () => {
  expect(calculator.multiply(85, -10)).toBe(-850);
});

test('Multiplicar -30 * 1.5 to equal -45', () => {
  expect(calculator.multiply(-30, 1.5)).toBe(-45);
});

test('Dividir 10 / 0 to equals indefinido', () =>{
  expect(calculator.divide(10,0)).toBe('Indefinido');
});
