<template>
  <div class="SlideDown">
    <button type="button" @click="showing = !showing">toggle v-slide-down</button>
    <transition name="v-slide-down">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideDown",
  data() {
    return {
      showing: false
    };
  }
};
</script>
