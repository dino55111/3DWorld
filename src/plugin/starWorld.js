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

  const balls = createBalls(scene)

  function animate () {
    requestAnimationFrame(animate)

    camera.rotation.y -= 0.002
    balls.forEach(ball => {
      ball.rotation.x += 0.1
      ball.rotation.y += 0.1
    })
    renderer.render(scene, camera)
  }

  camera.position.z = 1

  return {
    scene,
    camera,
    animate
  }
}

const createBalls = (scene) => {
  const geometry = new THREE.SphereGeometry(0.5, 110, 140)
  const material = new THREE.MeshNormalMaterial()

  const balls = []
  for (let index = 0; index < 1000; index++) {
    const sphere = new THREE.Mesh(geometry, material)
    const length = 50 + Math.random() * 10
    sphere.position.x = length * Math.cos(Math.random() * 360)
    sphere.position.y = length * Math.sin(Math.random() * 360)
    sphere.position.z = length * Math.tan(Math.random() * 360)
    scene.add(sphere)
    balls.push(sphere)
  }

  return balls
}