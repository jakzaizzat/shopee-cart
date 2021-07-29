import * as mutations from "./mutation-types";

export function addToCart(ctx, payload) {
  ctx.commit(mutations.ADD_TO_CART, payload);
}
