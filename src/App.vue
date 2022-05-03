<template>
  <div id="app">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style lang="scss">
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

@media (max-width: 1140px) {
  .container {
    max-width: 90%;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
