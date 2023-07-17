<script lang="ts" setup>
import HeaderLayout from '@/components/Header.vue'
import FooterLayout from '@/components/Footer.vue'
</script>
<template>
  <header-layout />
  <slot />

  <footer-layout />
</template>
