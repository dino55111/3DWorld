<template>
  <main>
    <MainKv></MainKv>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
  </main>

  <starWorld class="starWorldBg"></starWorld>
</template>

<script setup>
import MainKv from '../components/MainKv.vue'
import SectionOne from '../components/SectionOne.vue'
import SectionThree from '../components/SectionThree.vue'
import SectionTwo from '../components/SectionTwo.vue'
import starWorld from '../components/starWorld.vue'
</script>

<style lang="scss">
.starWorldBg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: 0;
  padding: 0;
}

main {
  margin: 0 0 60px;
}
</style>