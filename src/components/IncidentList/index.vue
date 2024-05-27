<template>
  <el-scrollbar style="border-right: 1px solid #dcdfe6;" height="calc(100vh - 60px)">
    <div class="controls">
      <el-select v-model="selectedSort" placeholder="Сортировать по" @change="sortIncidents">
        <el-option label="Статус" value="status"></el-option>
        <el-option label="Дата" value="date"></el-option>
      </el-select>
      <el-input v-model="searchQuery" placeholder="Поиск..." @input="filterIncidents" />
    </div>
    <div class="list">
      <IncidentCard
        v-bind="incident"
        :selectedIncident="incidentStore.selectedIncidentId"
        @click="handleIncidentSelect(incident.id)"
        v-for="incident in filteredAndSortedIncidents"
        :key="incident.id"
      />
    </div>
  </el-scrollbar>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { useIncidentStore } from '@/stores/incidentStore';
import type { Incident } from '@/types/incident';

// Получение store
const incidentStore = useIncidentStore();

// Получение состояния и действий из store
const { incidents, selectIncident } = incidentStore;

// Переменные для хранения выбранного критерия сортировки и поискового запроса
const selectedSort = ref<string>('status');
const searchQuery = ref<string>('');

// Сортировка и фильтрация инцидентов
const filteredAndSortedIncidents = computed(() => {
  let filtered = incidents.filter((incident: Incident) => {
    return incident.fio?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           incident.reason?.toLowerCase().includes(searchQuery.value.toLowerCase());
  });

  if (selectedSort.value === 'status') {
    const statusOrder = ['new', 'in-progress', 'completed', 'cancelled'];
    return filtered.sort((a: Incident, b: Incident) => {
      return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    });
  } else if (selectedSort.value === 'date') {
    return filtered.sort((a: Incident, b: Incident) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  return filtered;
});

// Обработка выбора инцидента
const handleIncidentSelect = (id: number) => {
  selectIncident(id);
};

// Обработка изменения критерия сортировки
const sortIncidents = () => {
  filteredAndSortedIncidents.value;
};

// Обработка фильтрации инцидентов
const filterIncidents = () => {
  filteredAndSortedIncidents.value;
};
</script>


<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.list {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-collapse: collapse;
}
</style>

