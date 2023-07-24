<script lang="ts" setup>
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
  <main class="container mx-auto">
    <p class="text-primary my-5">
      <span class="text-secondary"><nuxt-link to="/" class="cursor-pointer hover-color-primary">Trang chủ</nuxt-link> / </span> Giỏ hàng
    </p>
    <div v-if="carts.length" class="w-full overflow-hidden">
      <ul class="cart-product">
        <li v-for="(item, index) in carts" :key="index" class="cart-product__item flex py-5">
          <div class="flex-1 flex">
            <div class="w-[100px] overflow-hidden lg:mr-10">
              <img :src="item.product.img" :alt="item.product.name">
            </div>
            <div class="flex justify-center flex-col">
              <h6>
                {{ item.product.name }}
              </h6>
              <span class=" font-bold text-primary my-2 block">{{ item.product.price_promotional ? item.product.price_promotional.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : item.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}&#8363;</span>
            </div>
          </div>

          <div class="flex-1 hidden lg:flex items-center justify-between">
            <div class="w-[120px] py-2 relative text-center border-[1px] border-[#e1e1e1]">
              {{ item.quantity }}
              <button class="absolute right-2 top-[50%] translate-y-[-50%] rounded-[50%] border-[1px] bg-secondary" @click="addProduct(item.product)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              <button class="absolute left-2 top-[50%] translate-y-[-50%] rounded-[50%] border-[1px] bg-secondary" @click="reduceProduct(item.product.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
            </div>

            <span class="font-bold text-primary hidden lg:inline">{{ item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}&#8363;</span>

            <button class="" @click="removeProduct(item.product.id)">
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

          <!-- mobile -->
          <div class="w-[120px] flex lg:hidden flex-col justify-center items-center">
            <div class="w-full py-2 relative text-center border-[1px] border-[#e1e1e1]">
              {{ item.quantity }}
              <button class="absolute right-2 top-[50%] translate-y-[-50%] rounded-[50%] border-[1px] bg-secondary" @click="addProduct(item.product)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              <button class="absolute left-2 top-[50%] translate-y-[-50%] rounded-[50%] border-[1px] bg-secondary" @click="reduceProduct(item.product.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
            </div>
            <button class="" @click="removeProduct(item.product.id)">
              xóa
            </button>
          </div>
        </li>
      </ul>
      <div class="border-t-[1px] border-t-[rgba(0,0,0,0.2)] pt-6">
        <div class="lg:w-[545px] ml-auto">
          <div class="font-bold items-center flex justify-between">
            Tổng cộng: <span class="text-primary text-[18px]">{{ cartStore.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}&#8363;</span>
          </div>
          <div class="lg:flex mt-4">
            <nuxt-link to="/category/" class="btn-2 justify-center lg:mr-3">
              <svg
                id="Layer_1"
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 24 24"
                class="w-6 h-6 mr-1"
                fill="currentColor"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ><path d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z" /></svg>
              Tiếp tục mua hàng
            </nuxt-link>
            <nuxt-link to="/category/" class="btn-2 justify-center">
              <svg
                style="enable-background:new 0 0 24 24;"
                version="1.1"
                viewBox="0 0 24 24"
                class="w-6 h-6 mr-1"
                fill="currentColor"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ><g id="info" /><g id="icons"><path id="check" d="M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6   c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z" /></g></svg>
              Tiến hành thanh toán
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="p-5">
      Không có sản phẩm nào.
    </div>
  </main>
</template>
