<template>
  <div class="header">
    <h1 class="header__title">Система управления заявками</h1>
    <OperatorMenu />
  </div>
</template>

<script setup lang="ts">
import OperatorMenu from '@/components/OperatorMenu.vue'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid #dcdfe6;

  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
}
</style>