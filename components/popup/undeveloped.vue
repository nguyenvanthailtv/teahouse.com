<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
const open = computed(() => props.open)
const emits = defineEmits(['close'])
const closePopup = () => {
  emits('close')
}
</script>
<template>
  <div v-if="open" class="z-[10] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)]">
    <div class="absolute top-[30%] left-[50%] translate-x-[-50%] max-w-[500px] w-full bg-white shadow-md rounded-[12px] p-5 text-center">
      <h2 class="font-black text-[28px] text-primary text-center mb-4">
        Thông báo
      </h2>
      <p>Chức năng đang được phát triển!</p>
      <div class="text-end mt-6">
        <button class="px-4 py-1 rounded-[6px] border-[1px] hover-transition bg-white text-primary hover:bg-primary hover:text-white" @click="closePopup">
          Đóng
        </button>
      </div>
    </div>
  </div>
</template>
