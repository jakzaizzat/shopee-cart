import { shallowMount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";

describe("ProductItem.vue", () => {
  const mockProduct = {
    name: "Keyboard",
    price: 29,
  };

  const factory = (product, slot = "") => {
    return shallowMount(ProductItem, {
      propsData: {
        product: product,
      },
      slots: {
        default: slot,
      },
    });
  };

  it("should render product name and price", () => {
    const wrapper = factory(mockProduct);
    expect(wrapper.find("span").text()).toContain(mockProduct.name);
    expect(wrapper.find("div").text()).toContain(mockProduct.price);
  });

  it("should  show quantity if there is a quantity data", () => {
    const mockProduct = {
      name: "Keyboard",
      price: 29,
      quantity: 1,
    };
    const wrapper = factory(mockProduct);

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find("[data-qa='product-item']").text()).toContain(
      `(${mockProduct.quantity})`
    );
  });

  it("should render anything component in the action tab", () => {
    const wrapper = factory(mockProduct, "<button>Button Text</button>");
    expect(wrapper.find("button").text()).toContain("Button Text");
  });
});
