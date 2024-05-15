<template>
  <el-scrollbar height="calc(100vh - 60px)">
    <div class="list">
      <IncidentCard
        v-bind="incident"
        :selectedIncident="selectedIncident"
        @click="handleIncidentSelect(incident.id)"
        v-for="incident in incidents"
        :key="incident.id"
      />
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Incident } from './types'

const incidents: Incident[] = [
  {
    id: 1,
    fio: 'Меркин А.Д.',
    group: 'MTH-101',
    school: null,
    reason: 'Прошу разрешить пересдать экзамен по математике.',
    time: '15:38',
    date: '15.05',
    source: 'bot',
    phone: null,
    status: 'new'
  },
  {
    id: 2,
    fio: null,
    group: null,
    school: 'Школа №15',
    reason: 'Необходимо получить справку об обучении для предоставления в военкомат.',
    time: '10:20',
    date: '01.05',
    source: 'call',
    phone: '123-456-7890',
    status: 'in-progress'
  },
  {
    id: 3,
    fio: 'Петров В.И.',
    group: 'CSE-202',
    school: null,
    reason:
      'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
    time: '08:45',
    date: '14.04',
    source: 'bot',
    phone: null,
    status: 'completed'
  },
  {
    id: 5,
    fio: 'Петров В.И.',
    group: 'CSE-202',
    school: null,
    reason:
      'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
    time: '08:45',
    date: '14.04',
    source: 'bot',
    phone: null,
    status: 'cancelled'
  },
  {
    id: 1,
    fio: 'Меркин А.Д.',
    group: 'MTH-101',
    school: null,
    reason: 'Прошу разрешить пересдать экзамен по математике.',
    time: '15:38',
    date: '15.05',
    source: 'bot',
    phone: null,
    status: 'new'
  },
  {
    id: 2,
    fio: null,
    group: null,
    school: 'Школа №15',
    reason: 'Необходимо получить справку об обучении для предоставления в военкомат.',
    time: '10:20',
    date: '01.05',
    source: 'call',
    phone: '123-456-7890',
    status: 'in-progress'
  },
  {
    id: 3,
    fio: 'Петров В.И.',
    group: 'CSE-202',
    school: null,
    reason:
      'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
    time: '08:45',
    date: '14.04',
    source: 'bot',
    phone: null,
    status: 'completed'
  },
  {
    id: 5,
    fio: 'Петров В.И.',
    group: 'CSE-202',
    school: null,
    reason:
      'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
    time: '08:45',
    date: '14.04',
    source: 'bot',
    phone: null,
    status: 'cancelled'
  }
]

const selectedIncident = ref(1)

const handleIncidentSelect = (id: number) => {
  selectedIncident.value = id
}
</script>

<style lang="scss" scoped>
.list {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid #dcdfe6;
  border-collapse: collapse;
}
</style>
