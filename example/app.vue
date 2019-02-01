<template>
  <div id="App">
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

<style>
@import "../dist/vue-essential-transitions.min.css";
html,
body {
  margin: 0;
  padding: 0;
}
#App {
  width: 100vw;
  overflow: hidden;
  text-align: center;
}
#App > * {
  height: 120px;
}
</style>
