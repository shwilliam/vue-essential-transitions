<template>
  <div class="App">
    <Fade/>
    <SlideFade/>
  </div>
</template>

<script>
import Fade from "./components/fade.vue";
import SlideFade from "./components/slide-fade.vue";

export default {
  name: "App",
  components: {
    Fade,
    SlideFade
  }
};
</script>

<style scoped>
@import "../dist/vue-essential-transitions.min.css";
.App > * {
  height: 100px;
}
</style>
