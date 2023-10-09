<template>
  <div
    class="MainKv"
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
      <div class="arrowBox">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.MainKv {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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

  .arrowBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;

    .arrow {
      position: relative;
      width: 5px;
      height: 50px;
      background-color: #ffffff;
      border-radius: 2px;

      &::after,
      &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        display: block;
        width: 5px;
        height: 30px;
        background-color: #ffffff;
        border-radius: 3px;
      }

      &::before {
        left: -9px;
        transform: rotate(-45deg);
      }

      &::after {
        right: -9px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>