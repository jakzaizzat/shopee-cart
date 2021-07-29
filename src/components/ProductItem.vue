<template>
  <div
    class="flex items-center justify-between border border-gray-700 p-4 rounded"
  >
    <div>
      <span class="font-bold">{{ product.name }}</span> - ${{ product.price }}
      <template v-if="product.quantity">
        (<span>{{ product.quantity }}</span
        >)
      </template>
    </div>
    <slot></slot>
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
