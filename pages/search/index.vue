<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const searchText = ref()

watchEffect(() => {
  searchText.value = router.currentRoute.value.query.searchText
  useSeoMeta({
    title: searchText.value + ' - Tìm kiếm',
    ogTitle: searchText.value + ' - Tìm kiếm'
  })
})
</script>
<template>
  <section class="container mx-auto my-12">
    <div class="p-3 rounded-md font-bold bg-[#dc3545] text-white">
      Không tìm thấy kết quả nào phù hợp với: {{ searchText }}
    </div>
  </section>
</template>
