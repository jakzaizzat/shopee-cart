<template>
  <button
    @click.prevent="handleClick"
    class="bg-blue-800 p-2 rounded text-sm text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
