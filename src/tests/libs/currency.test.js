import { formatCurrency } from '../../libs/currency.js';

test('should transform value to NZ currency format', () => {

  const result = formatCurrency(100);
  expect(result).toBe('$100.00');
});
