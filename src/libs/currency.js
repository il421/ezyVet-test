// eslint-disable-next-line
export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
  }).format(parseFloat(price));
};
