<template>
  <div class="incident" :class="{ '--selected': isSelected }">
    <div :class="'incident__status --' + props.status">
      {{ statusText[props.status] }}
    </div>
    <div class="incident__main-info">
      <div class="incident__details">
        <div v-if="props.fio" class="incident__name">{{ props.fio }}</div>
        <div v-if="props.phone && !props.fio" class="incident__phone">{{ props.phone }}</div>
        <div v-if="props.group || props.school" class="incident__group-school">
          {{ props.group || props.school }}
        </div>
        <div class="incident__reason">{{ props.reason }}</div>
      </div>
      <div class="incident__time-date">
        <div class="incident__time">{{ props.time }}</div>
        <div class="incident__date">{{ props.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Incident } from '../types'
import { computed } from 'vue'

interface Props extends Incident {
  selectedIncident?: number
}

const props = defineProps<Props>()

const isSelected = computed(() => props.selectedIncident === props.id)

const statusText = {
  'new': 'Новое',
  'in-progress': 'В работе',
  'completed': 'Выполнено',
  'cancelled': 'Отменено'
}

const viewDetails = () => {
  // Логика для перехода к подробному просмотру инцидента
  console.log('View details for incident', props.id)
}
</script>

<style lang="scss" scoped>
.incident {
  position: relative;
  display: flex;
  // flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  border: 1px solid #dcdcdc;
  border-radius: 15px;
  cursor: pointer;
  padding: 15px;
  background-color: #fff;
  transition: background-color 0.3s;

  &__status {
    position: absolute;
    top: -15px;
    left: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 12px;
    color: #fff;

    &.--new {
      background-color: #52c41a;
    }
    &.--in-progress {
      background-color: #faad14;
    }
    &.--completed {
      background-color: #1890ff;
    }
    &.--cancelled {
      background-color: #ff4d4f;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__main-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &.--selected {
    background-color: #e6f7ff;
    border-color: #91d5ff;
  }

  &__name,
  &__phone {
    font-size: 14px;
    font-weight: 500;
  }

  &__group-school {
    font-size: 14px;
    color: #595959;
  }

  &__reason {
    max-width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__time-date {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3px;
  }

  &__time,
  &__date {
    font-size: 12px;
    color: #8c8c8c;
  }
}
</style>
