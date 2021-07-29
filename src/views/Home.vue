<template>
  <div>
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="mb-4"
    >
      <base-button @click="addToCart(product)">Add to cart</base-button>
    </product-item>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { products } from "@/data/product";
import BaseButton from "@/components/BaseButton";
export default {
  name: "Home",
  components: { BaseButton, ProductItem },
  data: () => ({
    products: [],
  }),
  mounted() {
    this.products = products;
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>
