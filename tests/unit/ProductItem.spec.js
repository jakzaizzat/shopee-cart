import { shallowMount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";

describe("ProductItem.vue", () => {
  const mockProduct = {
    name: "Keyboard",
    price: 29,
  };

  const wrapper = shallowMount(ProductItem, {
    propsData: {
      product: mockProduct,
    },
  });

  it("should render product name and price", () => {
    expect(wrapper.find("span").text()).toContain(mockProduct.name);
    expect(wrapper.find("div").text()).toContain(mockProduct.price);
  });

  it("should  show quantity if there is a quantity data", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should render anything component in the action tab", () => {});
});
