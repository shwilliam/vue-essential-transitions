<template>
  <div class="SlideFade">
    <button type="button" @click="showing = !showing">toggle v-slide-fade</button>
    <transition name="v-slide-fade">
      <h1 v-if="showing">hello world</h1>
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
