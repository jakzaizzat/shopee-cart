import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation.vue", () => {
  const wrapper = shallowMount(Navigation, {
    mocks: {
      $route: {
        path: "/cart",
      },
    },
    stubs: ["router-link"],
    computed: {
      productsInCart: () => 10,
    },
    scopedSlots: {
      default: function () {
        return this.$createElement("span", ["Button Text"]);
      },
    },
  });

  it("renders navigation", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it("should show number in cart", () => {
    expect(wrapper.find("[data-qa='nav-cart']").text()).toContain(10);
  });
});
