<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { Product, Category } from '~/types'
import ProductItem from '@/components/ProductItem.vue'
import request from '@/utils/request'
register()
const route = useRoute()
const product = ref<Product>()
const category = ref<Category>()
const getData = async () => {
  try {
    product.value = await request().get(`/products/${route.params.id}`)
    return Promise.resolve(product.value)
  } catch (error) {
    return Promise.reject(error)
  }
}

const getCategory = async () => {
  try {
    category.value = await request().get(`/categories/${product.value?.category_id}`)
    return Promise.resolve(category.value)
  } catch (error) {
    return Promise.reject(error)
  }
}

const products = ref<Product []>()

const getProducts = async () => {
  products.value = await request().get(`/products?category_id${product.value?.category_id}&_limit=6`)
}

await getData()
await getCategory()
await getProducts()
const slides = product.value?.gallery.concat(product.value.featuredImage)
useSeoMeta({
  title: product.value?.name,
  ogTitle: product.value?.name
})

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const cartStore = useCartStore()
const quantity = ref(1)
const addProduct = (product: Product, quantity: number) => {
  cartStore.addProduct(product, quantity)
}
const clickBuyNow = (product: Product, quantity: number) => {
  cartStore.addProduct(product, quantity)
  useRouter().push('/cart/')
}
</script>
<template>
  <section class="container mx-auto">
    <p class="text-primary my-5">
      <span class="text-secondary">
        <nuxt-link to="/" class="cursor-pointer hover-color-primary">Trang chủ</nuxt-link>
        /
        <nuxt-link
          :to="{
            name: 'category-id-slug',
            params: {
              id: category?.id,
              slug: category?.slug
            }
          }"
          class="cursor-pointer hover-color-primary"
        >
          {{ category?.name }}
        </nuxt-link>
        /
      </span>
      {{ product?.name }}
    </p>
  </section>
  <section class="my-6 bg-[url('assets/images/bg-top-product.png')] bg-[#fcfbfc] bg-no-repeat bg-contain">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-9 gap-10 ">
      <div class="lg:col-span-4">
        <swiper
          :space-between="10"
          :slides-per-view="1"
          :thumbs="{swiper: thumbsSwiper}"
          :effect="'fade'"
          class="border-[1px] border-[rgba(0,0,0,0.05)] mb-5"
        >
          <swiper-slide v-for="(item, index) in slides" :key="index">
            <img :src="item" alt="" class="w-full">
          </swiper-slide>
        </swiper>
        <swiper
          :space-between="10"
          :slides-per-view="5"
          :free-mode="true"
          :watch-slides-progress="true"
          class="swiper-thumb"
          @swiper="setThumbsSwiper"
        >
          <swiper-slide v-for="(item, index) in slides" :key="index" class="border-[1px] border-[rgba(0,0,0,0.05)]">
            <img :src="item" alt="" class="w-full">
          </swiper-slide>
        </swiper>
      </div>
      <div class="lg:col-span-5">
        <h3 class="text-lv2 mb-2">
          {{ product?.name }}
        </h3>
        <i class="text-[14px]">Mô tả đang cập nhập</i>
        <p>Giá: <span class="text-[18px] text-primary font-bold">{{ product?.price_promotional ? product?.price_promotional.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}&#8363;</span></p>
        <div class="my-4">
          Số lượng:
          <div class="inline-flex mx-5 border-[1px] border-[rgba(0,0,0,0.15)] rounded-[3px]">
            <button class="w-7 h-7 flex items-center justify-center " @click="quantity > 1 ? quantity-- : quantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4 text-[rgba(0,0,0,0.4)]"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
            <span class="py-1 w-12 text-center font-bold border-[rgba(0,0,0,0.15)] border-l-[1px] border-r-[1px] text-[14px] text-secondary">{{ quantity }}</span>
            <button class="w-7 h-7 flex items-center justify-center " @click="quantity++">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4 text-[rgba(0,0,0,0.4)]"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </button>
          </div>
        </div>
        <div class="md:flex border-b-[1px] border-[rgba(0,0,0,0.2)]">
          <button class="btn-1 justify-center w-full md:w-auto mr-5 !text-primary hover:!text-white hover:!bg-primary !bg-[#f3fff4]" @click="addProduct(product, quantity)">
            <svg viewBox="0 0 48 48" class="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0zm36.62 12L31.1 22z" fill="none" /><path d="M22 18h4v-6h6V8h-6V2h-4v6h-6v4h6v6zm-8 18c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm20 0c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-19.65-6.5c0-.09.02-.17.06-.24l1.8-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.72-14.02L38.83 8h-.01l-2.21 4-5.51 10H17.07l-.26-.54L12.32 12l-1.9-4-1.89-4H2v4h4l7.2 15.17-2.71 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5z" /></svg>
            Thêm vào giỏ hàng
          </button>
          <button class="btn-2 w-full md:w-[200px] justify-center" @click="clickBuyNow(product, quantity)">
            Mua ngay
          </button>
        </div>
        <div class="my-5">
          <p><strong>Giao hàng miễn phí:</strong> Áp dụng cho đơn hàng > 200.000đ</p>
          <p><strong>Thanh toán tại nhà:</strong> Nhanh chóng và an toàn</p>
        </div>
      </div>
    </div>
  </section>

  <section class="container mx-auto">
    <h2 class="my-6 font-bold uppercase lg:text-[30px] text-[24px]">
      Mô tả sản phẩm
    </h2>
    <div v-html="product?.description" />
  </section>

  <section class="container mx-auto my-12 block">
    <h2 class="text-lv1 mb-6">
      Có thể bạn sẽ thích
    </h2>
    <swiper
      :space-between="10"
      :breakpoints="{
        0: {
          slidesPerView:2
        },
        768: {
          slidesPerView:3
        },
        992: {
          slidesPerView:4
        }
      }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <product-item :product="item" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<style lang="scss">
.swiper-slide-thumb-active {
  border: 1px solid rgba(0,0,0,0.2);
}
.swiper-thumb {
  .swiper-slide:hover {
    border: 1px solid rgba(0,0,0,0.2);
  }
}
</style>
