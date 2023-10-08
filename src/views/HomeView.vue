<template>
  <main>
    <starWorld class="starWorldBg"></starWorld>
    <MainKv></MainKv>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
  </main>
</template>

<script setup>
import MainKv from '../components/MainKv.vue'
import SectionOne from '../components/SectionOne.vue'
import SectionTwo from '../components/SectionTwo.vue'
import starWorld from '../components/starWorld.vue'
</script>

<style lang="scss">
.starWorldBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  margin: 0;
  padding: 0;
}
</style>