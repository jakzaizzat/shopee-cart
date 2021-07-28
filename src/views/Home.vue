<template>
  <div>
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="mb-4"
    />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { products } from "@/data/product";
export default {
  name: "Home",
  components: { ProductItem },
  data: () => ({
    products: [],
  }),
  mounted() {
    this.products = products;
  },
};
</script>
