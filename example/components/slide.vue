<template>
  <div class="Slide">
    <button type="button" @click="showing = !showing">toggle v-slide</button>
    <transition name="v-slide">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      showing: false
    };
  }
};
</script>
