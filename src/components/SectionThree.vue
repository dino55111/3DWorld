<template>
  <div class="SectionThree">
    <h1 class="SectionThree__title">
      Section Three Title
    </h1>
    <h2 class="SectionThree__subTitle">
      welcome to Dino's three.js star world
    </h2>

    <div class="SectionThree__cardBox">
      <div class="SectionThree__card">
        <img
          src="https://picsum.photos/60/60?random=0"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionThree__card">
        <img
          src="https://picsum.photos/60/60?random=1"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionThree__card">
        <img
          src="https://picsum.photos/60/60?random=3"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionThree__card">
        <img
          src="https://picsum.photos/60/60?random=4"
          alt="fake image"
        >
        <div class="word">
          fake word fake word fake word
        </div>
      </div>
      <div class="SectionThree__card">
        <img
          src="https://picsum.photos/60/60?random=5"
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
.SectionThree {
  width: 100%;
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

  &__cardBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 80px;
  }

  &__card {
    margin: 0 20px;
    padding: 12px;

    img {
      display: block;
      margin: 0 auto;
    }

    .word {
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
</style>