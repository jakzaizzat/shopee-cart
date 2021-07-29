export function getProducts(state) {
  return state.products;
}

export function getNoProducts(state) {
  return state.products.reduce((a, b) => a + b.quantity, 0);
}
