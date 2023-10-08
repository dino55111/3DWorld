<template>
  <div class="SectionOne">
    <h1 class="SectionOne__title">
      Section One Title
    </h1>
    <h2 class="SectionOne__subTitle">
      try to make an example with three.js
    </h2>

    <div class="SectionOne__cardBox">
      <div class="SectionOne__card">
        <img
          src="https://picsum.photos/200/100?image=0"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionOne__card">
        <img
          src="https://picsum.photos/200/100?image=1"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionOne__card">
        <img
          src="https://picsum.photos/200/100?image=3"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SectionOne {
  width: 100%;
  margin: 30px 0;
  color: #ffffff;

  &__title {
    font-size: 38px;
    text-align: center;
  }

  &__subTitle {
    font-size: 24px;
    text-align: center;
  }

  &__cardBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &__card {
    margin: 0 20px;
    padding: 12px;

    .word {
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
</style>