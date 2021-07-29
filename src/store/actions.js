import * as mutations from "./mutation-types";

export function addToCart(ctx, payload) {
  ctx.commit(mutations.ADD_TO_CART, payload);
}

export function removeFromCart(ctx, payload) {
  ctx.commit(mutations.REMOVE_FROM_CART, payload);
}
