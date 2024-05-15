<template>
  <el-scrollbar style="border-right: 1px solid #dcdfe6;" height="calc(100vh - 60px)">
    <div class="list">
      <IncidentCard
        v-bind="incident"
        :selectedIncident="incidentStore.selectedIncidentId"
        @click="handleIncidentSelect(incident.id)"
        v-for="incident in incidents"
        :key="incident.id"
      />
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIncidentStore } from '@/stores/incidentStore';
import type { Incident } from '@/types/incident';

// Получение store
const incidentStore = useIncidentStore();

// Получение состояния и действий из store
const { incidents, selectIncident } = incidentStore;

// Обработка выбора инцидента
const handleIncidentSelect = (id: number) => {
  selectIncident(id);
};
</script>

<style lang="scss" scoped>
.list {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-collapse: collapse;
}
</style>
