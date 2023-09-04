<template>
  <TheHeader />
  <slot />
  <router-view />
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style lang="scss" scoped></style>
