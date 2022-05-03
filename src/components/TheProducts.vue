<template>
  <div class="products">
    <div class="container flex">
      <TheSidebar />

      <div class="products__list">
        <ProductItem
          v-for="item in records"
          :key="item.productId"
          :item="item"
        />
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
      records: [
        {
          productId: 4,
          productCategory: "Grocery, Household Essentials & Pet",
          productName: "Dog Delights Chicken Tendersticks 35oz, 2-pack\n\t\t\t",
          productLink:
            "https://www.costco.com/dog-delights-chicken-tendersticks-35oz%2c-2-pack.product.100808869.html",
          productPrice: "$19.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1603052-847__1&recipeName=350",
        },
        {
          productId: 5,
          productCategory: "Grocery, Household Essentials & Pet",
          productName: "BARK Costco Party Pack Dog Toy Bundle, 4-count\n\t\t\t",
          productLink:
            "https://www.costco.com/bark-costco-party-pack-dog-toy-bundle%2c-4-count.product.100780727.html",
          productPrice: "$9.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1530250-847__1&recipeName=350",
        },
        {
          productId: 6,
          productCategory: "Grocery, Household Essentials & Pet",
          productName: "Dog Delights Beef Tendersticks 18oz, 2-pack\n\t\t\t",
          productLink:
            "https://www.costco.com/dog-delights-beef-tendersticks-18oz%2c-2-pack.product.100797892.html",
          productPrice: "$19.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1591807-847__1&recipeName=350",
        },
        {
          productId: 7,
          productCategory: "Grocery, Household Essentials & Pet",
          productName:
            "Plato Pet Treats, On The Go! Energy Bar, Chicken & Mango Recipe, 12-Count 2-pack\n\t\t\t",
          productLink:
            "https://www.costco.com/plato-pet-treats%2c-on-the-go!-energy-bar%2c-chicken-%2526-mango-recipe%2c-12-count-2-pack.product.100807289.html",
          productPrice: "$19.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1587506-847__1&recipeName=350",
        },
        {
          productId: 8,
          productCategory: "Grocery, Household Essentials & Pet",
          productName: "Back to the Roots Water Garden Mini Ecosystem\n\t\t\t",
          productLink:
            "https://www.costco.com/back-to-the-roots-water-garden-mini-ecosystem.product.100530086.html",
          productPrice: "$29.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1262383-847__1&recipeName=350",
        },
        {
          productId: 9,
          productCategory: "Appliances",
          productName:
            "Samsung 5.8 cu. ft. Freestanding GAS Range with Convection\n\t\t\t",
          productLink:
            "https://www.costco.com/samsung-5.8-cu.-ft.-freestanding-gas-range-with-convection.product.100530231.html",
          productPrice: "$989.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100530231-847__1&recipeName=350",
        },
        {
          productId: 10,
          productCategory: "Appliances",
          productName:
            "LG 6.3 cu. ft. Slide-In ELECTRIC Range with ProBake Convection\n\t\t\t",
          productLink:
            "https://www.costco.com/lg-6.3-cu.-ft.-slide-in-electric-range-with-probake-convection.product.100250301.html",
          productPrice: "$899.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100250301-847__1&recipeName=350",
        },
        {
          productId: 11,
          productCategory: "Appliances",
          productName:
            "Objecto W4 Woodgrain Hybrid Humidifier with Aromatherapy\n\t\t\t",
          productLink:
            "https://www.costco.com/objecto-w4-woodgrain-hybrid-humidifier-with-aromatherapy.product.100797600.html",
          productPrice: "$59.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100797600-847__1&recipeName=350",
        },
        {
          productId: 12,
          productCategory: "Appliances",
          productName:
            "Objecto W7 Humidifier with Aromatherapy Function\n\t\t\t",
          productLink:
            "https://www.costco.com/objecto-w7-humidifier-with-aromatherapy-function.product.100809259.html",
          productPrice: "$69.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100809259-847__1&recipeName=350",
        },
        {
          productId: 13,
          productCategory: "Beauty",
          productName:
            "Vitabath Original Spring Green Bath & Shower Gelee, 44 oz\n\t\t\t",
          productLink:
            "https://www.costco.com/vitabath-original-spring-green-bath-%2526-shower-gelee%2c-44-oz.product.100797747.html",
          productPrice: "$28.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1587355-847__1&recipeName=350",
        },
        {
          productId: 14,
          productCategory: "Beauty",
          productName:
            "Vitabath Cleansing & Foaming Shower Oil 16 fl oz, 2-pack\n\t\t\t",
          productLink:
            "https://www.costco.com/vitabath-cleansing-%2526-foaming-shower-oil-16-fl-oz%2c-2-pack.product.100805197.html",
          productPrice: "$26.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1599665-847__1&recipeName=350",
        },
        {
          productId: 15,
          productCategory: "Beauty",
          productName:
            "MEHAZ Grooming Bundle 5-piece Set with 50 File Refill Pads\n\t\t\t",
          productLink:
            "https://www.costco.com/mehaz-grooming-bundle-5-piece-set-with-50-file-refill-pads.product.100771689.html",
          productPrice: "$26.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1559034-847__1&recipeName=350",
        },
        {
          productId: 16,
          productCategory: "Beauty",
          productName: "boscia Green Tea Blotting Linens, 5-pack\n\t\t\t",
          productLink:
            "https://www.costco.com/boscia-green-tea-blotting-linens%2c-5-pack.product.100837855.html",
          productPrice: "$19.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1629121-847__1&recipeName=350",
        },
        {
          productId: 17,
          productCategory: "Beauty",
          productName: "Sigma Renew Lip Oil Duo\n\t\t\t",
          productLink:
            "https://www.costco.com/sigma-renew-lip-oil-duo.product.100804890.html",
          productPrice: "$9.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100804890-847__1&recipeName=350",
        },
        {
          productId: 18,
          productCategory: "Beauty",
          productName:
            "JUARA Skincare Miracle Tea Complete Eye Creme, 0.5 oz\n\t\t\t",
          productLink:
            "https://www.costco.com/juara-skincare-miracle-tea-complete-eye-creme%2c-0.5-oz.product.100803994.html",
          productPrice: "$29.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1598015-847__1&recipeName=350",
        },
        {
          productId: 19,
          productCategory: "Beauty",
          productName: "Madeca Derma Botanic Cleansing Balm, 4.05 oz\n\t\t\t",
          productLink:
            "https://www.costco.com/madeca-derma-botanic-cleansing-balm%2c-4.05-oz.product.100800280.html",
          productPrice: "$14.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1594341-847__1&recipeName=350",
        },
        {
          productId: 20,
          productCategory: "Beauty",
          productName:
            "Perricone MD Cold Plasma Plus Intensive Hydrating Complex, 2.0 oz\n\t\t\t",
          productLink:
            "https://www.costco.com/perricone-md-cold-plasma-plus-intensive-hydrating-complex%2c-2.0-oz.product.100796765.html",
          productPrice: "$49.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1590533-847__1&recipeName=350",
        },
        {
          productId: 21,
          productCategory: "Beauty",
          productName:
            "JUARA Clove Flower & Turmeric Anti-Aging Serum, 1 oz\n\t\t\t",
          productLink:
            "https://www.costco.com/juara-clove-flower-%2526-turmeric-anti-aging-serum%2c-1-oz.product.100803178.html",
          productPrice: "$26.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1596978-847__1&recipeName=350",
        },
        {
          productId: 22,
          productCategory: "Beauty",
          productName: "Nao Ayurveda Whole Beauty Facial Oil, 2.0 fl\n\t\t\t",
          productLink:
            "https://www.costco.com/nao-ayurveda-whole-beauty-facial-oil%2c-2.0-fl.product.100785031.html",
          productPrice: "$29.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1576416-847__1&recipeName=350",
        },
        {
          productId: 23,
          productCategory: "Beauty",
          productName:
            "Perricone MD High Potency Classics Face Finishing & Firming Moisturizer Bundle\n\t\t\t",
          productLink:
            "https://www.costco.com/perricone-md-high-potency-classics-face-finishing-%2526-firming-moisturizer-bundle.product.100766508.html",
          productPrice: "$54.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1554518-847__1&recipeName=350",
        },
        {
          productId: 24,
          productCategory: "Clothing, Luggage & Handbags",
          productName: "Kirkland Signature Kid's Shearling Boot, Black\n\t\t\t",
          productLink:
            "https://www.costco.com/kirkland-signature-kid's-shearling-boot%2c-black.product.100685017.html",
          productPrice: "$12.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100685017-847__1&recipeName=350",
        },
        {
          productId: 25,
          productCategory: "Clothing, Luggage & Handbags",
          productName: "Timberland Youth Jacket\n\t\t\t",
          productLink:
            "https://www.costco.com/timberland-youth-jacket.product.100730104.html",
          productPrice: "$19.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100730104-847__1&recipeName=350",
        },
        {
          productId: 26,
          productCategory: "Clothing, Luggage & Handbags",
          productName: "Carter's Infant 2-pack Jumpsuit, Alligator\n\t\t\t",
          productLink:
            "https://www.costco.com/carter's-infant-2-pack-jumpsuit%2c-alligator.product.100730425.html",
          productPrice: "$9.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100730425-847__1&recipeName=350",
        },
        {
          productId: 27,
          productCategory: "Clothing, Luggage & Handbags",
          productName: "Lucky Kids' 2-piece Fleece Set, Charcoal\n\t\t\t",
          productLink:
            "https://www.costco.com/lucky-kids'-2-piece-fleece-set%2c-charcoal.product.100730553.html",
          productPrice: "$12.97",
          productPicture:
            "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100730553-847__1&recipeName=350",
        },
      ],
    };
  },
  methods: {
    async getProducts() {
      const data = await axios.get("/costcosteals/product");
      console.log(data);
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
  }
}
</style>
