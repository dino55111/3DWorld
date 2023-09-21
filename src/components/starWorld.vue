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
import * as THREE from 'three'
import { initial } from '@/plugin/starWorld.js'
import { ref } from 'vue'

const starWorld = ref(null)
let scene = null
let camera = null
  
// animate()

onMounted(() => {
  const threeObj = initial(starWorld.value)
  scene = threeObj.scene
  camera = threeObj.camera

  threeObj.animate()
  
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  
  camera.position.z = 5
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