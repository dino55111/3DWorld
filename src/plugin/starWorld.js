import * as THREE from 'three'

export const initial = (canvasDOM) => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasDOM
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return {
    scene,
    camera,
    animate
  }
}