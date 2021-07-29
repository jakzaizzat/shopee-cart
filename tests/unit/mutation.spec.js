import mutations from "@/store/mutations";
import * as types from "@/store/mutation-types";

describe("Mutation", () => {
  const state = {
    products: [],
  };

  beforeEach(() => {
    state.products = [];
  });

  const mockProduct = {
    id: 1,
    name: "Gaming Mouse",
    price: 29.99,
  };
  it("should able to add item to cart", () => {
    mutations[types.ADD_TO_CART](state, mockProduct);
    expect(state.products.length).toBe(1);
  });

  it("should be able to increase the quantity if we add the same product", () => {
    mutations[types.ADD_TO_CART](state, mockProduct);
    mutations[types.ADD_TO_CART](state, mockProduct);
    expect(state.products.length).toBe(1);
    const existingProduct = state.products.find(
      (product) => product.id === mockProduct.id
    );
    expect(existingProduct.quantity).toBe(2);
  });

  it("should be able to add new product to existing cart", () => {
    const newProduct = {
      id: 2,
      name: "Keyboard",
      price: 30,
    };
    mutations[types.ADD_TO_CART](state, mockProduct);
    mutations[types.ADD_TO_CART](state, newProduct);
    expect(state.products.length).toBe(2);
    const existingProduct = state.products.find(
      (product) => product.id === newProduct.id
    );
    expect(existingProduct.quantity).toBe(1);
  });
});
