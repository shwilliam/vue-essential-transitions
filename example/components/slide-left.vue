<template>
  <div class="SlideLeft">
    <button type="button" @click="showing = !showing">toggle v-slide-left</button>
    <transition name="v-slide-left">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideLeft",
  data() {
    return {
      showing: false
    };
  }
};
</script>
