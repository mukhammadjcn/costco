<template>
  <div class="header">
    <div class="container flex">
      <a href="/">
        <img src="../assets/logoHeader.png" alt="" />
      </a>
      <p>We will update clearance product from costco everyday</p>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  padding: 32px 0;
  background: #dee1e3;

  img {
    height: 40px;
  }

  p {
    font-weight: 600;
  }

  @media (max-width: 776px) {
    img {
      height: 28px;
    }

    p {
      display: none;
    }
  }
}
</style>
