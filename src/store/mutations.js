import * as types from "./mutation-types";

export default {
  [types.ADD_TO_CART](state, payload) {
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === payload.id
    );

    if (existingProductIndex === -1) {
      state.products.push({ ...payload, quantity: 1 });
      return;
    }

    state.products[existingProductIndex].quantity++;
  },

  [types.REMOVE_FROM_CART](state, payload) {
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === payload.id
    );

    if (existingProductIndex === -1) return;

    state.products[existingProductIndex].quantity--;

    if (state.products[existingProductIndex].quantity === 0) {
      state.products.splice(existingProductIndex, 1);
    }
  },
};
