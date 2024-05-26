<template>
  <el-container style="max-height: 100vh">
    <el-header class="header">
      <div class="header-content">
        <h1 class="header-title">
          Система управления заявками
        </h1>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <IncidentList />
      </el-aside>
      <el-main style="display: flex; padding: 0px">
        <AppChat style="width: 70%" v-if="incidentStore.selectedIncident"/>
        <IncidentInfo style="width: 30%" v-if="incidentStore.selectedIncident" />
        <p class="main__empty-label" v-else>Выберите обращение чтобы начать работу</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useIncidentStore } from '@/stores/incidentStore';

const incidentStore = useIncidentStore();
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

.main {
  &__empty-label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
}
</style>
