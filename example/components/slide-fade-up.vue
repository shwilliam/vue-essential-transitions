<template>
  <div class="SlideFadeUp">
    <button type="button" @click="showing = !showing">toggle v-slide-fade-up</button>
    <transition name="v-slide-fade-up">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideFadeUp",
  data() {
    return {
      showing: false
    };
  }
};
</script>
