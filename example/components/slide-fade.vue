<template>
  <div class="SlideFade">
    <button type="button" @click="showing = !showing">toggle v-slide-fade</button>
    <transition name="v-slide-fade">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideFade",
  data() {
    return {
      showing: false
    };
  }
};
</script>
