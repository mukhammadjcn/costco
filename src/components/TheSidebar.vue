<template>
  <div class="sidebar">
    <h2 class="sidebar__title" @click="setActive('')">All products</h2>
    <div class="sidebar__list">
      <div
        class="sidebar__item"
        v-for="item in category"
        :key="item.id"
        @click="setActive(item.name)"
        :class="activeCategory == item.name ? 'active' : ''"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: null,
      category: [
        {
          id: 1,
          name: "Appliances",
        },
        {
          id: 2,
          name: "Baby",
        },
        {
          id: 3,
          name: "Beauty",
        },
        {
          id: 4,
          name: "Clothing, Luggage & Handbags",
        },
        {
          id: 5,
          name: "Computers",
        },
        {
          id: 6,
          name: "Floral & Gift Baskets",
        },
        {
          id: 7,
          name: "Furniture",
        },
        {
          id: 8,
          name: "Gift Cards & Tickets",
        },
        {
          id: 9,
          name: "Gourmet Foods",
        },
        {
          id: 10,
          name: "Grocery, Household Essentials& Pet",
        },
        {
          id: 11,
          name: "Health & Personal Care",
        },
        {
          id: 12,
          name: "Home & Installation Services",
        },
        {
          id: 13,
          name: "Home & Kitchen",
        },
        {
          id: 14,
          name: "Mattresses",
        },
        {
          id: 15,
          name: "Office Products",
        },
        {
          id: 16,
          name: "Patio, Lawn & Garden",
        },
        {
          id: 17,
          name: "Sports & Fitness",
        },
        {
          id: 18,
          name: "Tires & Auto",
        },
        {
          id: 19,
          name: "Toys & Books",
        },
        {
          id: 20,
          name: "View More Categories",
        },
      ],
    };
  },
  methods: {
    setActive(name) {
      // Set active category
      this.activeCategory = name;

      // Give category name for products
      this.$emit("category", name);
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 300px;
  cursor: pointer;
  flex-shrink: 0;
  &__title {
    background: #e31936;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    padding: 16px 0;
    text-align: center;
  }

  &__list {
    border: 2px solid #cfcece;
    border-top: none;
  }

  &__item {
    padding: 12px 24px;
    border-bottom: 2px solid #cfcece;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: black;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #ffecec;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .active {
    background: #ffd3d3;
  }
}
</style>
