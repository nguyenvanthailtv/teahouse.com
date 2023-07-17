<script setup lang="ts">
import logo from '@/assets/images/logo.png'
</script>
<template>
  <footer class="text-white pt-[30px] md:pt-[50px] lg:pt-[80px] bg-cover bg-no-repeat bg-[url(@/assets/images/bg_footer.png)]">
    <section class="container mx-auto ">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-3">
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <div class="h-[120px] py-2 flex items-end">
            <img :src="logo" alt="">
          </div>
          <p class="my-2">
            Chúng tôi mong muốn Tea House sẽ trở thành “Nhà Trà", nơi mọi người xích lại gần nhau và tìm thấy niềm vui, sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.
          </p>
          <ul class="social">
            <li class="social-item hover-transition">
              <nuxt-link to="#">
                <svg
                  id="Layer_1"
                  enable-background="new 0 0 56.693 56.693"
                  class="w-4 h-4"
                  version="1.1"
                  fill="currentColor"
                  viewBox="0 0 56.693 56.693"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" /></svg>
              </nuxt-link>
            </li>
            <li class="social-item hover-transition">
              <nuxt-link to="#">
                <svg
                  id="Layer_1"
                  style="enable-background:new 0 0 512 512;"
                  version="1.1"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ><path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z" /></svg>
              </nuxt-link>
            </li>
            <li class="social-item hover-transition">
              <nuxt-link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 1000.2" class="w-4 h-4" fill="currentColor"><path d="M0 359c0-42 8.8-83.7 26.5-125s43-79.7 76-115 76.3-64 130-86S345.7 0 411 0c106 0 193 32.7 261 98s102 142.3 102 231c0 114-28.8 208.2-86.5 282.5S555.3 723 464 723c-30 0-58.2-7-84.5-21s-44.8-31-55.5-51l-40 158c-3.3 12.7-7.7 25.5-13 38.5S259.8 873 253.5 885c-6.3 12-12.7 23.3-19 34s-12.7 20.7-19 30-11.8 17.2-16.5 23.5-9 11.8-13 16.5l-6 8c-2 2.7-4.7 3.7-8 3s-5.3-2.7-6-6c0-.7-.5-5.3-1.5-14s-2-17.8-3-27.5-2-22.2-3-37.5-1.3-30.2-1-44.5 1.3-30.2 3-47.5 4.2-33.3 7.5-48c7.3-31.3 32-135.7 74-313-5.3-10.7-9.7-23.5-13-38.5s-5-27.2-5-36.5l-1-15c0-42.7 10.8-78.2 32.5-106.5S303.3 223 334 223c24.7 0 43.8 8.2 57.5 24.5S412 284.3 412 309c0 15.3-2.8 34.2-8.5 56.5s-13.2 48-22.5 77-16 52.5-20 70.5c-6.7 30-.8 56 17.5 78s42.8 33 73.5 33c52.7 0 96.2-29.8 130.5-89.5S634 402.7 634 318c0-64.7-21-117.5-63-158.5S470.3 98 395 98c-84 0-152.2 27-204.5 81S112 297.7 112 373c0 44.7 12.7 82.3 38 113 8.7 10 11.3 20.7 8 32-1.3 3.3-3.3 11-6 23s-4.7 19.7-6 23c-1.3 7.3-4.7 12.2-10 14.5s-11.3 2.2-18-.5c-39.3-16-68.8-43.5-88.5-82.5S0 411 0 359z" /></svg>
              </nuxt-link>
            </li>
            <li class="social-item hover-transition">
              <nuxt-link to="#">
                <svg
                  id="Layer_1"
                  style="enable-background:new 0 0 56.6934 56.6934;"
                  version="1.1"
                  viewBox="0 0 56.6934 56.6934"
                  class="w-5 h-5"
                  fill="currentColor"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ><g><path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z" /><path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z" /></g></svg>
              </nuxt-link>
            </li>
            <li class="social-item hover-transition">
              <nuxt-link to="#">
                <svg viewBox="0 0 576 512" class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="lg:h-[120px] py-2 flex items-end">
            <h3 class="lg:text-[24px] mt-6 text-[20px] font-bold tracking-[0.5px] uppercase text-primary">
              Liên hệ với chúng tôi
            </h3>
          </div>
          <ul class="my-2">
            <li class="flex">
              <div class="block mx-2 my-1">
                <svg
                  id="Layer_1"
                  enable-background="new 0 0 24 24"
                  class="w-5 h-5 text-primary"
                  fill="currentColor"
                  version="1.1"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ><path d="M11.513,12.38c-2.117,0-3.835-1.729-3.835-3.862c0-2.135,1.718-3.863,3.835-3.863s3.835,1.729,3.835,3.863  C15.348,10.65,13.63,12.38,11.513,12.38 M11.513,0C6.825,0,3.025,3.827,3.025,8.549c0,4.46,3.844,10.213,6.411,13.014  c0.959,1.045,2.076,2.454,2.076,2.454s1.2-1.417,2.229-2.493C16.306,18.84,20,13.451,20,8.549C20,3.827,16.2,0,11.513,0" /></svg>
              </div>
              <p>
                Địa chỉ: Tầng 6 tòa nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội
              </p>
            </li>
            <li class="flex mt-3">
              <div class="block mx-2 py-1">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
              </div>
              <p>
                Hotline đặt bàn: <a href="tel:+19006750" class="hover-color-primary font-semibold">1900 6750</a><br>
                Hotline giao hàng: <a href="tel:+19006750" class="hover-color-primary font-semibold">1900 6750</a>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div class="lg:h-[120px] py-2 flex items-end">
            <h3 class="lg:text-[24px] mt-6 text-[20px] font-bold tracking-[0.5px] uppercase text-primary">
              Đăng ký nhận khuyến mãi
            </h3>
          </div>
          <div class="my-2">
            <p>Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn</p>
            <div class="mt-6 pl-6 bg-white rounded-[30px] flex overflow-hidden">
              <input type="email" class="flex-1 outline-0 py-3 px-1 text-secondary" name="" placeholder="Email của bạn">
              <button class=" py-3 max-w-[120px] w-[40%] font-bold bg-primary rounded-[25px]">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 text-[14px] text-center mt-8 border-t-[1px] border-t-[rgba(255,255,255,0.2)]">
        &copy; Bản quyền thuộc về Cafein Team | Cung cấp bởi <span class="text-primary font-bold">Sapo</span>
      </div>
    </section>
  </footer>

  <!--Back top-->
  <button class="back-top border-[1px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  </button>
</template>
