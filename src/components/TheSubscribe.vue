<template>
  <div class="subscribe">
    <div class="container flex">
      <h2 class="subscribe__title">Subscribe to our Newsletter</h2>
      <p class="subscribe__info">
        People who subscribe will receive early list of sale products
      </p>

      <form class="subscribe__form" @submit.prevent="submit">
        <input
          v-model.trim="email"
          type="email"
          autocomplete="on"
          class="subscribe__email"
          placeholder="Enter your email address here.."
        />
        <button class="subscribe__submit">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../axios/axios";
import qs from "qs";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submit() {
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };

      if (this.email !== "" && this.email.includes("@")) {
        //   Loading true
        this.$emit("loading", true);

        // Post data
        try {
          await axios.post(
            "/costcosteals/email",
            qs.stringify({
              email: this.email,
            }),
            options
          );
        } finally {
          alert("Your email succefully stored )");
          // Loading false
          this.$emit("loading", false);
          this.email = "";
        }
      } else {
        alert("Please enter valid email");
      }
    },
  },
};
</script>

<style lang="scss">
.subscribe {
  padding: 80px 0;
  background-image: url("../assets/section-bg\ 1.png");
  background-repeat: no-repeat;
  background-size: cover;
  & > .flex {
    flex-direction: column;
  }

  &__title {
    font-weight: 300;
    font-size: 54px;
    line-height: 65px;
    color: #000000;
  }

  &__info {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  &__form {
    margin-top: 48px;
    position: relative;
    width: 720px;
    height: 64px;
  }

  &__email {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: 2px solid #d9d9d9;
    outline: none;
    padding: 0 32px;
    font-size: 18px;
  }

  &__submit {
    position: absolute;
    right: 0;
    height: 100%;
    padding: 0 36px;
    border: navajowhite;
    background: #e31936;
    font-size: 16px;
    border-radius: 40px;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
