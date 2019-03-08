<template>
  <div class="SlideUp">
    <button type="button" @click="showing = !showing">toggle v-slide-up</button>
    <transition name="v-slide-up">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideUp",
  data() {
    return {
      showing: false
    };
  }
};
</script>
