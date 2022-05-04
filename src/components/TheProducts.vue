<template>
  <div class="products">
    <div class="container flex">
      <!-- Sidebar side -->
      <TheSidebar @category="setCategory" />

      <!-- Products list side -->
      <div class="">
        <!-- products -->
        <div class="products__list">
          <ProductItem
            v-for="item in products"
            :key="item.productId"
            :item="item"
          />
        </div>

        <!-- Bottom pagination -->
        <page-paginate
          v-model="categoryPage"
          :page-count="pagination"
          :click-handler="isCategory ? setPage : getProducts"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
        >
        </page-paginate>
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar.vue";
import ProductItem from "./ProductItem.vue";
import axios from "@/axios/axios";

export default {
  components: { TheSidebar, ProductItem },
  data() {
    return {
      products: [],
      pagination: 5,
      isCategory: "",
      categoryPage: 1,
    };
  },
  methods: {
    async getProducts(pageNum, isCategory) {
      try {
        // Loading true
        this.$emit("loading", true);
        document.body.style.overflow = "hidden";

        // Fetching products
        const { data } = await axios.get(
          `/costcosteals/product${
            isCategory ? "/" + isCategory : ""
          }?currentPage=${
            pageNum && pageNum !== undefined ? pageNum : 1
          }&currentSize=9`
        );
        console.log(
          "path",
          `/costcosteals/product${
            isCategory ? "/" + isCategory : ""
          }?currentPage=${
            pageNum && pageNum !== undefined ? pageNum : 1
          }&currentSize=9`
        );

        // Storing data
        this.products = data.data.productPage.records;
        this.pagination = data.data.productPage.pages;
      } catch {
        // If somthing went wrong alert this
        alert("Something went wrong on fetching products !");
      } finally {
        // Loading false
        this.$emit("loading", false);
        document.body.style.overflow = "auto";
      }
    },
    setCategory(val) {
      this.isCategory = val;
      this.categoryPage = 1;
      this.fetchCategory();
    },
    setPage(page) {
      this.categoryPage = page;
      this.fetchCategory();
    },
    fetchCategory() {
      this.getProducts(this.categoryPage, this.isCategory);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.products {
  padding: 64px 0;

  .flex {
    align-items: flex-start;
    gap: 48px;
    justify-content: initial;
  }

  &__list {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.pagination {
  display: inline-flex;
  float: right;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  border-radius: 8px;
  padding: 4px;
  gap: 4px;

  & > li {
    padding: 8px 12px;
  }

  .active {
    color: white;
    background: black;
    border-radius: 4px;
  }

  .disabled {
    background: #f4f4f4;
    border-radius: 4px;
    cursor: not-allowed;
    a {
      cursor: not-allowed;
    }
  }
}
</style>
