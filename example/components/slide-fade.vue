<template>
  <div class="SlideFade">
    <button type="button" @click="showing = !showing">toggle slide-fade</button>
    <transition name="slide-fade">
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
