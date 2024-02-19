<template>
  <div class="incident" :class="{ '--selected': isSelected }">
    <p class="incident__title">{{ props.title }}</p>
    <div class="incident__main-info">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <div class="incident__last-message">{{ props.last_message }}</div>
    </div>
    <div class="incident__time">{{ props.time }}</div>
  </div>
</template>

<script setup lang="ts">
import { Incident } from '../types'
import { computed } from 'vue'

interface Props extends Incident {
  selectedIncident?: number
}

const props = defineProps<Props>()

const isSelected = computed(() => props.selectedIncident === props.id)
</script>

<style lang="scss" scoped>
.incident {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 15px;
  cursor: pointer;
  padding: 10px;

  &__title {
    position: absolute;
    top: -13px;
    background-color: #0163cc;
    font-size: 14px;
    color: var(--color-text);
    border-radius: 10px;
    padding-right: 5px;
    padding-left: 5px;
  }

  &__main-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &.--selected {
    background-color: #fff;
    color: black;
  }

  &__last-message {
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__time {
    font-size: 10px;
  }
}
</style>
