<template>
  <section
    class="MainContent"
  >
    <div>
      <h1>
        Star World Demo
      </h1> 
      <h2>A <b>Three.js based</b> full page background effect. </h2>
      <div class="btn-block">
        <div
          class="btn"
        >
          Dino
        </div> 
        <div
          class="btn"
        >
          Example
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.MainContent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffffff;

  .btn-block {
    display: flex;

    .btn {
      padding: 10px;
      border: 3px #ffffff solid;

      + .btn {
        margin-left: 10px;
      }
    }
  }
}
</style>