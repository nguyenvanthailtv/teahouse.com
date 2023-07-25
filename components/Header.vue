<script setup lang="ts">
import { ref } from 'vue'
import Cart from '@/components/Cart.vue'
import Undeveloped from '@/components/popup/undeveloped.vue'
import request from '@/utils/request'
import logo from '@/assets/images/logo.png'
import logoMobile from '@/assets/images/logo_mobi.png'
const cartStore = useCartStore()
const categories = ref()
const fetchCategories = async () => {
  categories.value = await request().get('/categories')
}
await fetchCategories()
const menuListProduct = ref(false)

const openPopup = ref(false)
</script>
<template>
  <header class="border-b-[1px] border-b-[rgba(0,0,0,0.1)]">
    <section class="header-1 hidden lg:block">
      <div class="bg-primary py-1">
        <div class="container mx-auto flex items-center justify-between py-1 text-white">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="_1" data-name="1">
                <path
                  d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"
                />
                <path
                  d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"
                />
                <path
                  d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"
                />
              </g>
            </svg>
            Hotline:
            <a href="tel:+19006750" class="cursor-pointer hover:text-secondary hover-transition ml-1"> 1900 6750</a>
          </div>
          <ul class="flex items-center">
            <li class="px-2 relative cart hover-transition cursor-default">
              <nuxt-link to="/cart/" class="hover-transition relative cart__title">
                <svg
                  class="feather feather-shopping-cart inline mr-2"
                  fill="none"
                  height="24"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span class="hidden lg:inline">Giỏ hàng</span>
                <div class="absolute bg-white left-4 bottom-[-10px] px-1 rounded-[50%] text-[12px] text-primary">
                  {{ cartStore.totatQuantity }}
                </div>
              </nuxt-link>

              <div
                class="dropdown-menu absolute left-[-200%] hover-transition right-0 box-shadow translate-y-[100%] opacity-0 bg-white text-secondary rounded-[6px]"
              >
                <cart />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white">
        <nav class="container mx-auto flex items-center justify-between py-3">
          <div class="flex items-center justify-between ">
            <nuxt-link to="/" class="hover-color-primary font-bold px-1 py-2 mx-3">
              Trang chủ
            </nuxt-link>
            <nuxt-link to="/introduce/" class="hover-color-primary font-bold px-1 py-2 mx-3">
              Giới thiệu
            </nuxt-link>
            <span class="mx-3 menu-item">
              <nuxt-link to="/category/" class="hover-color-primary font-bold px-1 py-2 ">
                Sản phẩm
                <svg
                  id="Layer_1"
                  class="w-5 h-5 inline-block"
                  fill="currentColor"
                  style="enable-background:new 0 0 512 512;"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
                  />
                </svg>
              </nuxt-link>
              <ul
                class="dropdown-menu font-normal text-[14px] absolute left-0 hover-transition right-[-100%] box-shadow translate-y-[100%] opacity-0 bg-white text-secondary px-3 py-2 rounded-[6px]"
              >
                <li v-for="item in categories" :key="item.id" class="dropdown-menu__item">
                  <nuxt-link
                    :to="{
                      name: 'category-id-slug',
                      params: {
                        id: item.id,
                        slug: item.slug
                      }
                    }"
                    class="dropdown-menu__item__link hover-color-primary"
                  >
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </span>
          </div>
          <div class="flex-[1] text-center">
            <nuxt-link to="/" class="inline-block">
              <img :src="logo" alt="">
            </nuxt-link>
          </div>
          <div class="flex items-center justify-between ">
            <nuxt-link to="#" class="hover-color-primary font-bold px-1 py-2 mx-3" @click="openPopup = true">
              Tin tức
            </nuxt-link>
            <nuxt-link to="#" class="hover-color-primary font-bold px-1 py-2 mx-3" @click="openPopup = true">
              Thực đơn
            </nuxt-link>
            <nuxt-link to="/contact/" class="hover-color-primary font-bold px-1 py-2 mx-3" @click="openPopup = true">
              Liên hệ
            </nuxt-link>
          </div>
        </nav>
      </div>
    </section>
    <section class="header-2 block lg:hidden bg-primary py-2">
      <div class="container mx-auto flex items-center justify-between py-2">
        <button id="menu-mobile__btn" type="button" class="p-2">
          <svg
            id="Layer_1"
            height="32px"
            style="enable-background:new 0 0 32 32;"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            fill="#fff"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            />
          </svg>
        </button>
        <nuxt-link to="/">
          <img :src="logoMobile" alt="">
        </nuxt-link>
        <nuxt-link to="/cart/" class="hover-transition relative text-white">
          <svg
            class="feather feather-shopping-cart inline mr-2"
            fill="none"
            height="24"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span class="hidden sm:inline">Giỏ hàng</span>
          <div class="absolute bg-white left-4 bottom-[-10px] px-1 rounded-[50%] text-[12px] text-primary">
            {{ cartStore.totatQuantity }}
          </div>
        </nuxt-link>
      </div>
      <div class="menu-mobile-wrap z-50 fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)]">
        <ul class="menu-mobile w-[280px] sm:w-[375px] h-full bg-white overflow-y-scroll">
          <li>
            <nuxt-link to="/" class="menu-mobile-item">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                <path
                  d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                  fill="#4d8a53"
                  class="fill-000000"
                />
              </svg>
              Trang chủ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/introduce/" class="menu-mobile-item">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                <path
                  d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                  fill="#4d8a53"
                  class="fill-000000"
                />
              </svg>
              Giới thiệu
            </nuxt-link>
          </li>
          <li>
            <nuxt-link>
              <div class="menu-mobile-item justify-between">
                <nuxt-link to="/category/" class="flex items-center">
                  <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                    <path
                      d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                      fill="#4d8a53"
                      class="fill-000000"
                    />
                  </svg>
                  Sản phẩm
                </nuxt-link>
                <button
                  type="button"
                  class="menu-mobile-item-product__btn bg-primary px-1 rounded-[3px]"
                  @click="menuListProduct = !menuListProduct"
                >
                  <svg
                    id="Layer_1"
                    class="w-5 h-5 inline-block text-white"
                    fill="currentColor"
                    style="enable-background:new 0 0 512 512;"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
                    />
                  </svg>
                </button>
              </div>
              <nav
                :class="[menuListProduct ? 'max-h-[1000px]' : 'max-h-0']"
                class="w-full h-auto hover-transition overflow-hidden"
              >
                <nuxt-link v-for="item in categories" :key="item.id" :to="{name: 'category-id-slug', params: {id: item.id, slug: item.slug}}" class="menu-mobile-item-product">
                  <svg
                    id="Capa_1"
                    fill="#000000"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="w-2 h-2 mr-2 ml-4"
                    viewBox="0 0 595.021 595.021"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171C551.682,437.885,437.885,551.682,297.511,551.682z"
                          />
                          <path
                            d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  {{ item.name }}
                </nuxt-link>
              </nav>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="menu-mobile-item" @click="openPopup = true">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                <path
                  d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                  fill="#4d8a53"
                  class="fill-000000"
                />
              </svg>
              Tin tức
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="menu-mobile-item" @click="openPopup = true">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                <path
                  d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                  fill="#4d8a53"
                  class="fill-000000"
                />
              </svg>
              Thực đơn
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="menu-mobile-item" @click="openPopup = true">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.825 1024">
                <path
                  d="M-.088 512c0-141.5 114.5-256 256-256 141.438 0 256 114.5 256 256s-114.562 256-256 256c-141.499 0-256-114.5-256-256z"
                  fill="#4d8a53"
                  class="fill-000000"
                />
              </svg>
              Liên hệ
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>

    <undeveloped :open="openPopup" @close="openPopup = false" />
  </header>
</template>
