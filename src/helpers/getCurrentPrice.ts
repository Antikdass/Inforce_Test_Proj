export const getCurrentPrice = (oldPrice: number, discountPercentage: number) => {
  if (discountPercentage) {
    const discount = Math.round(oldPrice * (discountPercentage / 100));
    return oldPrice - discount;
  } else return oldPrice;
};
