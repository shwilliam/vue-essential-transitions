<template>
  <div class="Grow">
    <button type="button" @click="showing = !showing">toggle v-grow</button>
    <transition name="v-grow">
      <div class="square" v-if="showing"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Grow",
  data() {
    return {
      showing: false
    };
  }
};
</script>
