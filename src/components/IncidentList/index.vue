<template>
  <div class="list">
    <IncidentCard
      v-bind="incident"
      :selectedIncident="selectedIncident"
      @click="handleIncidentSelect(incident.id)"
      v-for="incident in incidentsList"
      :key="incident.id"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Incident } from './types'

const incidentsList = [
  {
    id: 1,
    title: 'Кот на дереве',
    full_name: 'Меркин А.Д',
    last_message: 'Text text text',
    time: '15:38'
  },
  {
    id: 2,
    title: 'Проблема с водоснабжением',
    full_name: 'Иванова Е.С',
    last_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '10:20'
  },
  {
    id: 3,
    title: 'Повреждение дороги',
    full_name: 'Петров В.И',
    last_message:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    time: '08:45'
  }
] as Incident[]

const selectedIncident = ref(1)

const handleIncidentSelect = (id) => {
  selectedIncident.value = id
}
</script>

<style lang="scss" scoped>
.list {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
