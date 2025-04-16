test('✅ Soma de 5 + 3 deve ser igual a 8', () => {
  expect(Number('5') + Number('3')).toBe(8);
});

test('❌ Soma de "a" + 3 deve resultar em NaN', () => {
  expect(Number('a') + Number('3')).toBeNaN();
});
