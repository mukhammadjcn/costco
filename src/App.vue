<template>
  <div id="app">
    <!-- Header section -->
    <TheHeader />

    <!-- Adverts section -->
    <AddSection />

    <!-- The subscribe section -->
    <TheSubscribe @loading="setLoading" />

    <!-- The products section -->
    <TheProducts />

    <!-- Loading option for fetching data -->
    <TheLoading v-show="loading" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AddSection from "./components/AddSection.vue";
import TheSubscribe from "./components/TheSubscribe.vue";
import TheLoading from "./components/TheLoading.vue";
import TheProducts from "./components/TheProducts.vue";
export default {
  name: "App",
  components: { TheHeader, AddSection, TheSubscribe, TheLoading, TheProducts },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    setLoading(val) {
      this.loading = val;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration-line: none;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
}

@media (max-width: 1320px) {
  .container {
    max-width: 90%;
  }
}
#app {
  font-family: "Lato", sans-serif;
  color: #2c3e50;
}
</style>
