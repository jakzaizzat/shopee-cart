<template>
  <div id="app" class="font-sans">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: { Navigation },
};
</script>
