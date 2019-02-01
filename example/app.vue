<template>
  <div id="App">
    <Fade/>
    <Slide/>
    <SlideLeft/>
    <SlideFade/>
    <SlideFadeLeft/>
  </div>
</template>

<script>
import Fade from "./components/fade.vue";
import Slide from "./components/slide.vue";
import SlideLeft from "./components/slide-left.vue";
import SlideFade from "./components/slide-fade.vue";
import SlideFadeLeft from "./components/slide-fade-left.vue";

export default {
  name: "App",
  components: {
    Fade,
    Slide,
    SlideLeft,
    SlideFade,
    SlideFadeLeft
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
  width: 100%;
  overflow: hidden;
  text-align: center;
}
#App > * {
  height: 120px;
}
button {
  display: block;
  margin: 0 auto;
}
.square {
  display: inline-block;
  min-height: 60px;
  min-width: 60px;
  background-color: blue;
}
</style>
