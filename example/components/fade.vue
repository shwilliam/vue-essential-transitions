<template>
  <div class="Fade">
    <button type="button" @click="showing = !showing">toggle v-fade</button>
    <transition name="v-fade">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Fade",
  data() {
    return {
      showing: false
    };
  }
};
</script>
