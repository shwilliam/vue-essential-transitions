<template>
  <div class="Fade">
    <button type="button" @click="showing = !showing">toggle fade</button>
    <transition name="fade">
      <h1 v-if="showing">hello world</h1>
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
