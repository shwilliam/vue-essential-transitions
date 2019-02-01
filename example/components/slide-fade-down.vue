<template>
  <div class="SlideFadeDown">
    <button type="button" @click="showing = !showing">toggle v-slide-fade-down</button>
    <transition name="v-slide-fade-down">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideFadeDown",
  data() {
    return {
      showing: false
    };
  }
};
</script>
