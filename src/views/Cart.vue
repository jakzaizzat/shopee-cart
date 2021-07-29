<template>
  <div class="cart">
    <div v-if="productsInCart.length > 0">
      <product-item
        v-for="product in productsInCart"
        :key="product.id"
        :product="product"
        class="mb-4"
      >
        <base-button @click="removeFromCart(product)"
          >Remove from cart</base-button
        >
      </product-item>
    </div>
    <p v-else class="text-center">No Item in the Cart!</p>
  </div>
</template>
<script>
import ProductItem from "@/components/ProductItem";
import { products } from "@/data/product";
import BaseButton from "@/components/BaseButton";
export default {
  components: { BaseButton, ProductItem },
  data: () => ({
    carts: [],
  }),
  computed: {
    productsInCart() {
      return this.$store.getters["getProducts"];
    },
  },
  mounted() {
    this.carts = products;
  },

  methods: {
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    },
  },
};
</script>
