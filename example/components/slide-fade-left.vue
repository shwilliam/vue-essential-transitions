<template>
  <div class="SlideFadeLeft">
    <button type="button" @click="showing = !showing">toggle v-slide-fade-left</button>
    <transition name="v-slide-fade-left">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideFadeLeft",
  data() {
    return {
      showing: false
    };
  }
};
</script>
