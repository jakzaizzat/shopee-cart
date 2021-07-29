<template>
  <div class="cart">
    <div v-if="carts.length > 0">
      <product-item
        v-for="product in carts"
        :key="product.id"
        :product="product"
        class="mb-4"
      />
    </div>
    <p v-else class="text-center">No Item in the Cart!</p>
  </div>
</template>
<script>
import ProductItem from "@/components/ProductItem";
import { products } from "@/data/product";
export default {
  components: { ProductItem },
  data: () => ({
    carts: [],
  }),
  mounted() {
    this.carts = products;
  },
};
</script>
