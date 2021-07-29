<template>
  <div
    class="flex items-center justify-between border border-gray-700 p-4 rounded"
  >
    <div>
      <span class="font-bold">{{ product.name }}</span> - ${{
        product.price
      }}
      (<span>0</span>)
    </div>
    <button class="bg-blue-800 p-2 rounded text-sm text-white">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
