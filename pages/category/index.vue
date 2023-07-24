<script lang="ts" setup>
import { ref } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
import { Product } from '~/types'
useSeoMeta({
  title: 'Tất cả sản phẩm',
  ogTitle: 'Tất cả sản phẩm'
})
const products = ref<Product[]>()
const pagination = ref({
  page: 1,
  limit: 12,
  totalPage: 1
})
const getData = async () => {
  await fetch(`https://q6kks8-8080.csb.app/products?_page=${pagination.value.page}&_limit=${pagination.value.limit}`).then((res) => {
    pagination.value.totalPage = Math.ceil(parseInt(res.headers.get('x-total-count')) / 12)
    return res.json()
  }).then((response) => {
    products.value = response
  })
}
await getData()
const clickPage = async (item: number) => {
  pagination.value.page = item
  await getData()
}
const nextPage = async () => {
  if (pagination.value.page < pagination.value.totalPage) {
    pagination.value.page++
    await getData()
  }
}

const prevPage = async () => {
  if (pagination.value.page > 1) {
    pagination.value.page--
    await getData()
  }
}
</script>
<template>
  <main class="container mx-auto">
    <p class="text-primary my-5">
      <span class="text-secondary"><nuxt-link to="/" class="cursor-pointer hover-color-primary">Trang chủ</nuxt-link> / </span> Tất cả sản phẩm
    </p>
    <div class="lg:mt-16 mt-10 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
      <product-item v-for="product in products" :key="product.id" :product="product" />
    </div>
    <ul class="pagination mb-10">
      <li
        :class="[pagination.page == 1? 'disabled' : '']"
        @click="prevPage()"
      >
        <svg class="w-6 h-6" fill="currenColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
      </li>
      <li
        v-for="item in pagination.totalPage"
        :key="item"
        :class="[pagination.page == item? 'active' : '']"
        @click="clickPage(item)"
      >
        {{ item }}
      </li>
      <li
        :class="[pagination.page == pagination.totalPage? 'disabled' : '']"
        @click="nextPage()"
      >
        <svg class="w-6 h-6" fill="currenColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
      </li>
    </ul>
  </main>
</template>
