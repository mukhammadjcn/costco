<template>
  <div class="products">
    <div class="container flex">
      <the-sidebar></the-sidebar>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar.vue";
export default {
  components: { TheSidebar },
};
</script>

<style lang="scss">
.products {
  padding: 64px 0;
}
</style>
