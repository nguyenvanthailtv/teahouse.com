<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Product } from 'types'
const cartStore = useCartStore()
const { carts } = storeToRefs(cartStore)

const addProduct = (product: Product) => {
  cartStore.addProduct(product)
}

const reduceProduct = (id: number) => {
  cartStore.reduceProduct(id)
}
const removeProduct = (id: number) => {
  cartStore.removeProduct(id)
}
</script>
<template>
  <div v-if="carts.length" class="w-full overflow-hidden">
    <ul class="cart-product max-h-[310px] overflow-auto p-[20px]">
      <li v-for="(item, index) in carts" :key="index" class="cart-product__item flex py-5">
        <div class="w-[100px] overflow-hidden mr-3">
          <img :src="item.product.img" :alt="item.product.name">
        </div>
        <div class="flex-1 relative">
          <h6 class="text-[14px]">
            {{ item.product.name }}
          </h6>
          <span class="text-[14px] font-bold text-primary my-2 block">{{ item.product.price_promotional ? item.product.price_promotional : item.product.price }}&#8363;</span>
          <div class="flex w-[80px] text-[14px]">
            <span class="flex-1 border-[1px] py-1 border-[#e1e1e1] border-r-[0] text-center">{{ item.quantity }}</span>
            <div class="flex flex-col">
              <button class="border-[1px] w-5 h-4 px-[1px] border-[#e1e1e1] bg-[#e1e1e1]" @click="addProduct(item.product)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white hover:text-primary"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              <button class="border-[1px] w-5 h-4 px-[1px] border-[#e1e1e1]" @click="reduceProduct(item.product.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 hover:text-primary"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
            </div>
          </div>

          <button class="absolute top-0 right-0" @click="removeProduct(item.product.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-4 h-4 hover:text-primary"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
    <div class="my-2 py-2 mx-[20px] border-y-[1px] border-y-[rgba(0,0,0,0.2)] items-center flex justify-between">
      Tổng cộng: <span class="font-bold text-primary text-[18px]">{{ cartStore.totalPrice }}&#8363;</span>
    </div>
    <div class="p-6">
      <nuxt-link to="#" class="py-[10px] text-center font-bold text-white bg-primary hover:bg-secondary hover-transition block rounded-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5 inline-block"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        Tới giỏ hàng và thanh toán
      </nuxt-link>
    </div>
  </div>
  <div v-else>
    giỏ hàng
  </div>
</template>
