<template>
  <div>
    <canvas
      id="starWorld"
      ref="starWorld"
      class="starWorld"
    ></canvas>
  </div>
</template>

<script setup>
import { initial } from '@/plugin/starWorld.js'
import {
  ref, onMounted 
} from 'vue'

const starWorld = ref(null)
  
// animate()

onMounted(() => {
  const threeObj = initial(starWorld.value)

  threeObj.animate()
})
</script>

<style lang="scss">
.starWorld {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>