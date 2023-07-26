<script setup lang="ts">
import { ref } from 'vue'
import undeveloped from '@/components/popup/undeveloped.vue'
const openPopup = ref(false)
</script>
<template>
  <main class="container mx-auto">
    <p class="text-primary my-5">
      <span class="text-secondary"><nuxt-link to="/" class="cursor-pointer hover-color-primary">Trang chủ</nuxt-link> / </span> Liên hệ
    </p>
    <section class="grid lg:grid-cols-2 gap-14 my-16">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0977426142085!2d105.84978977519968!3d21.028774730620555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb4f9a20e!2zSOG7kyBIb8OgbiBLaeG6v20!5e0!3m2!1svi!2s!4v1690360389707!5m2!1svi!2s"
          class="w-full h-full min-h-[400px]"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div>
        <span class="text-lv1">Gửi thông tin cho chúng tôi</span>
        <p>Hãy liên hệ ngay với chúng tôi để nhận được nhiều ưu đãi hấp dẫn dành cho bạn!</p>
        <ul class="my-3">
          <li class="flex mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-primary w-6 h-6 mr-2">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span><strong>Địa chỉ:</strong> Tầng 6 tòa nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội</span>
          </li>
          <li class="flex mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-primary w-6 h-6 mr-2">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <span><strong>Email:</strong> <a class="hover-color-primary" href="mailto:hellocafein@gmail.com">hellocafein@gmail.com</a></span>
          </li>
          <li class="flex mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2 text-primary">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>

            <span><strong>Địa chỉ:</strong> <a class="hover-color-primary" href="tel:+19006750">1900 6750</a></span>
          </li>
        </ul>
        <div>
          <input type="text" class="py-[10px] outline-none mb-3 px-6 border-[1px] border-[rgba(0,0,0,0.15)] rounded-[20px] w-full" placeholder="Họ và tên*">
          <input type="text" class="py-[10px] outline-none mb-3 px-6 border-[1px] border-[rgba(0,0,0,0.15)] rounded-[20px] w-full" placeholder="Email*">
          <input type="text" class="py-[10px] outline-none mb-3 px-6 border-[1px] border-[rgba(0,0,0,0.15)] rounded-[20px] w-full" placeholder="Điện thoại*">
          <textarea
            id=""
            class="py-[10px] outline-none mb-3 px-6 border-[1px] border-[rgba(0,0,0,0.15)] rounded-[20px] w-full"
            name=""
            cols="30"
            rows="5"
            placeholder="Nội dung"
          />
          <button class="btn-2" @click="openPopup=true">
            Gửi thông tin
          </button>
          <undeveloped :open="openPopup" @close="openPopup=false" />
        </div>
      </div>
    </section>
  </main>
</template>
