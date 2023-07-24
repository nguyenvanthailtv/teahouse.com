<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { ref, watch } from 'vue'
import request from '@/utils/request'
import ProductItem from '@/components/ProductItem.vue'
import slider1 from '~/assets/images/slider_1.png'
import pic1 from '~/assets/images/picture_1.png'
import pic2 from '~/assets/images/picture_2.png'
import pic3 from '~/assets/images/picture_3.png'
import pic4 from '~/assets/images/picture_4.png'
import pic5 from '~/assets/images/picture_5.png'
register()
useSeoMeta({
  title: 'Tea House',
  ogTitle: 'Tea House'
})
const slides = [
  {
    id: 1,
    img: slider1
  }
]

const listPictures = [
  {
    id: 1,
    img: pic1
  },
  {
    id: 2,
    img: pic2
  },
  {
    id: 3,
    img: pic3
  },
  {
    id: 4,
    img: pic4
  },
  {
    id: 5,
    img: pic5
  }
]
const categories = ref()
const listProducts = ref()
const menuActive = ref(0)
const fetchCategories = async () => {
  try {
    categories.value = await request().get('/categories')
    Promise.resolve(categories.value)
    menuActive.value = categories.value[0].id
  } catch (e) {
    Promise.reject(e)
  }
}

const fetchProducts = async (categoryId: number) => {
  try {
    listProducts.value = await request().get('/products?category_id=' + categoryId)
    Promise.resolve(listProducts.value)
  } catch (e) {
    Promise.reject(e)
  }
}
watch(menuActive, (newValue: number) => {
  fetchProducts(newValue)
})

await fetchCategories()
await fetchProducts(menuActive.value)

</script>
<template>
  <main>
    <!--  slide-->
    <section class="z-0">
      <swiper :slides-per-view="1" :effect="'fade'">
        <swiper-slide v-for="item in slides" :key="item.id" class="block">
          <img :src="item.img" alt="" class="aspect-video w-full max-h-[600px]">
        </swiper-slide>
      </swiper>
    </section>

    <!-- Danh mục sản phẩm -->
    <section class="section-category container mx-auto pt-[50px] md:pt-[90px] pb-10">
      <h1 class="text-lv1">
        Danh mục sản phẩm
      </h1>
      <swiper
        :breakpoints="{
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        :pagination="{ clickable: true }"
        class="mt-6 md:mt-10"
      >
        <swiper-slide v-for="item in categories" :key="item.id">
          <nuxt-link
            :to="{
              name: 'category-id-slug',
              params: {
                id: item.id,
                slug: item.slug
              }
            }"
            class="hover-color-primary hover:img:scale-[1.1]"
          >
            <div class="overflow-hidden rounded-[12px] py-3">
              <img
                :src="item.img"
                :alt="item.name"
                class="aspect-video hover-transition hover:scale-[1.1]  w-full h-auto object-cover"
              >
            </div>
            <h5 class="text-lv2 py-2 text-center">
              {{ item.name }}
            </h5>
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </section>

    <!-- Tại sao chọn chúng tôi -->
    <section
      class="pt-[50px] md:pt-[90px] md:pb-[150px] bg-no-repeat bg-cover bg-left md:bg-cover bg-[url('@/assets/images/bg_why.png')]"
    >
      <div class="container mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div>
          <span class="text-lv1">Tại sao chọn chúng tôi</span>
          <p class="my-3 text-[14px] md:text-[18px]">
            Với những nghệ nhân rang tâm huyết và đội ngũ tài năng cùng những câu chuyện trà đầy cảm hứng, ngôi nhà Tea
            House là không gian dành riêng cho những ai trót yêu say đắm hương vị của những lá trà tuyệt hảo.
          </p>
          <ul class="mt-[50px]">
            <li class="flex mb-7 ">
              <div class="mr-4">
                <img src="/assets/images/icon_why_1.png" alt="">
              </div>
              <div>
                <span class="text-lv2">Giá cả phải chăng</span>
                <p class="my-1 text-[14px] md:text-[18px]">
                  Cam kết chỉ cung cấp cà phê có nguồn gốc được kiểm soát chất lượng
                </p>
              </div>
            </li>
            <li class="flex mb-7 ">
              <div class="mr-4">
                <img src="/assets/images/icon_why_2.png" alt="">
              </div>
              <div>
                <span class="text-lv2">Hương vị tuyệt hảo</span>
                <p class="my-1 text-[14px] md:text-[18px]">
                  Những đọt trà được lựa chọn cẩn thận ngay từ lúc đang ngâm mình trong sương
                </p>
              </div>
            </li>
            <li class="flex mb-7 ">
              <div class="mr-4">
                <img src="/assets/images/icon_why_3.png" alt="">
              </div>
              <div>
                <span class="text-lv2">Sản phẩm tự nhiên</span>
                <p class="my-1 text-[14px] md:text-[18px]">
                  Cam kết chỉ cung cấp lá trà có nguồn gốc được kiểm soát chất lượng chặt
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Menu hôm nay -->
    <section class="pt-[50px] md:pt-[90px] container mx-auto">
      <h1 class="text-lv1">
        Menu hôm nay
      </h1>
      <ul class="flex items-center overflow-auto justify-start md:justify-center">
        <li
          v-for="item in categories"
          :key="item.id"
          :class="[item.id === menuActive ? 'active' : '']"
          class="mx-3 btn-1"
          @click="menuActive = item.id"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
        <product-item v-for="item in listProducts" :key="item.id" :product="item" />
      </div>
    </section>

    <!-- Thời gian mở cửa-->
    <section class="pt-[50px] md:pt-[90px] container mx-auto">
      <div class="grid lg:grid-cols-12 grid-cols-1">
        <div
          class=" text-white lg:col-span-7 bg-[#4ba354] py-[30px] px-[15px] md:py-[90px] md:px-[60px] relative before:absolute before:bg-[url('@/assets/images/vector_datban.png')] before:bg-contain before:bg-no-repeat before:w-[30%] before:h-[40%] before:right-[10px] before:bottom-0"
        >
          <span class="text-lv1">Thời gian mở cửa</span>
          <p class="my-2 text-[14px]">
            “Cà phê nhé" - Một lời hẹn rất riêng của người Việt. Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia
            câu chuyện của riêng mình.
          </p>
          <div class="my-3 font-bold md:text-[18px] text-[16px]">
            T2 - T6: 8h30 - 21h30<br>
            T7 - CN: 8h00 - 22h00
          </div>
        </div>
        <div class="my-4 hidden lg:block lg:col-span-5">
          <img class="object-cover" src="assets/images/banner_time_open.png" alt="">
        </div>
      </div>
    </section>

    <!--List picture-->
    <section class="md:mt-[90px] mt-[50px]">
      <swiper
        :breakpoints="{
          0: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 5
          }
        }"
      >
        <swiper-slide v-for="item in listPictures" :key="item.id">
          <div class="block overflow-hidden relative pb-[100%]">
            <img :src="item.img" alt="" class="absolute object-cover w-full h-full z-0">
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>
