<template>
  <main>
    <starWorld class="starWorldBg"></starWorld>
    <MainContent></MainContent>
    <SectionOne></SectionOne>
  </main>
</template>

<script setup>
import MainContent from '../components/MainContent.vue'
import SectionOne from '../components/SectionOne.vue'
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