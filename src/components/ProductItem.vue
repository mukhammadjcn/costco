<template>
  <div class="product">
    <div class="product__img">
      <img :src="item.productPicture" />
    </div>

    <div class="product__info">
      <h4>{{ item.productName }}</h4>
      <p>{{ item.productPrice }}</p>
      <a :href="item.productLink" target="_blank"> Buy at Costco </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss">
.product {
  border: 1px solid #cccccc;
  width: 300px;

  &__img {
    height: 280px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 16px 24px;
    color: #000000;

    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      height: 72px;
      overflow: hidden;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin: 16px 0 8px;
    }

    a {
      padding: 8px 12px;
      background: #e31936;
      color: white;
      display: inline-block;
      transition: 0.3s ease-in-out;

      &:hover {
        background: black;
      }
    }
  }
}
</style>
