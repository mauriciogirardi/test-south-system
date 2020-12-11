const formattedCurrency = (price: number): string =>
  price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

export default formattedCurrency;
