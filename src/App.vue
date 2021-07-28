<template>
  <div id="app" class="font-sans">
    <Navigation />
    <div class="max-w-2xl mx-auto py-16">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: { Navigation },
};
</script>
