<template>
  <div class="SectionTwo">
    <h1 class="SectionTwo__title">
      Section Two Title
    </h1>
    <h2 class="SectionTwo__subTitle">
      make fun with three.js in this demo
    </h2>
    <div class="SectionTwo__box">
      <div class="SectionTwo__article">
        <img
          src="https://picsum.photos/400/300?random=0"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionTwo__article">
        <img
          src="https://picsum.photos/400/300?random=1"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionTwo__article">
        <img
          src="https://picsum.photos/400/300?random=2"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
          fake word fake word fake word
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SectionTwo {
  margin: 0 15px;
  padding: 50px 0;
  color: #ffffff;

  &__title {
    font-size: 38px;
    text-align: center;
  }

  &__subTitle {
    font-size: 24px;
    text-align: center;
  }

  &__article {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    + .SectionTwo__article {
      margin-top: 20px;
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;
    }

    .word {
      margin: 20px;
      text-align: center;
    }
  }
}
</style>