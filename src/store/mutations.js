import * as types from "./mutation-types";

export default {
  [types.ADD_TO_CART](state, payload) {
    state.products.push(payload);
  },
};
