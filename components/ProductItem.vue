<script setup lang="ts">
import { PropType } from 'vue'
import { Product } from 'types'
const cartStore = useCartStore()
const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
const product = computed(() => props.product)
const addProduct = (product: Product) => {
  cartStore.addProduct(product, 1)
}
</script>
<template>
  <div class="cursor-default product-item">
    <div class="relative w-full overflow-hidden pb-[100%] border-[1px] border-[rgba(0,0,0,0.2)]">
      <nuxt-link
        :to="{
          name: 'product-id-slug',
          params: {
            id: product.id,
            slug: product.slug,
          }
        }"
        class="w-full h-full absolute"
      >
        <img
          :src="product.featuredImage"
          :alt="product.name"
          class="w-full h-full hover-transition hover:scale-[1.1] cursor-pointer object-cover z-0"
        >
      </nuxt-link>
      <p
        class="add-cart absolute bottom-0 translate-y-[100%] cursor-pointer hover:bg-secondary w-full text-center py-2 font-bold text-white bg-primary"
        @click="addProduct(product)"
      >
        Thêm vào giỏ hàng
      </p>
    </div>
    <div class="flex flex-col items-center py-4">
      <nuxt-link
        :to="{
          name: 'product-id-slug',
          params: {
            id: product.id,
            slug:product.slug
          }
        }"
        class="font-bold text-lv3"
      >
        {{ product.name }}
      </nuxt-link>
      <div v-if="product.price_promotional" class="flex items-center text-[18px]">
        Giá:
        <strong>
          {{ product.price_promotional.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}
          &#8363;
        </strong>

        <span class="text-[14px] ml-2 line-through">
          {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}
          &#8363;
        </span>
      </div>
      <div v-else>
        Giá:
        <strong class="text-[18px]">
          {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}
          &#8363;
        </strong>
      </div>
    </div>
  </div>
</template>
