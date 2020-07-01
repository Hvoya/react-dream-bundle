<template>
  <div>
    <p>123d</p>
    <img :src="jpg" alt="" />
    <img :src="png" alt="" />
    <img :src="svg" alt="" />
  </div>
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
