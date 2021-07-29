<template>
  <div class="bg-green-600 py-4 flex items-center justify-center text-white">
    <router-link to="/" class="p-2 hover:bg-white hover:text-black rounded mr-4"
      >Products</router-link
    >
    <router-link to="/cart" class="p-2 hover:bg-white hover:text-black rounded"
      >Cart ({{ productsInCart }})</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    cart: 0,
  }),
  computed: {
    productsInCart() {
      return this.$store.getters.getNoProducts;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-white text-black;
}
</style>
