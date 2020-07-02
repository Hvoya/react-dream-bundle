<template lang="pug">
  div
    h1 Hello world!
</template>
<script>
import jpg from './assets/example.jpg';
import png from './assets/example.png';
import svg from './assets/example.svg';
export default {
  data() {
    return {
      jpg,
      png,
      svg,
    };
  },
};
</script>
<style>
p {
  background-color: red;
}
</style>
