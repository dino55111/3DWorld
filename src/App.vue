<template>
  <section>
    <RouterView></RouterView>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;

  > section {
    width: 100%;
  }
}
</style>