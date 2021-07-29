import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton.vue", () => {
  const wrapper = shallowMount(BaseButton, {
    scopedSlots: {
      default: function () {
        return this.$createElement("span", ["Button Text"]);
      },
    },
  });

  it("renders button", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it("should render a slot", () => {
    expect(wrapper.text()).toContain("Button Text");
  });
  it("should emit a click event", () => {
    wrapper.trigger("click");
    expect(wrapper.emitted()).toEqual({ click: [[]] });
  });
});
