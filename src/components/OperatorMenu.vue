<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ operatorStore.operatorName }}
      <i class="el-icon-arrow-down el-icon--right"></i>
      <span
        :class="[
          'status-indicator',
          operatorStore.operatorStatus === 'Не беспокоить' ? 'do-not-disturb' : 'available'
        ]"
      ></span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <p class="email">{{ operatorStore.operatorEmail }}</p>
        <el-dropdown-item v-if="operatorStore.operatorStatus === 'Не беспокоить'" @click="setStatus('В работе')">В работе</el-dropdown-item>
        <el-dropdown-item v-else @click="setStatus('Не беспокоить')">Не беспокоить</el-dropdown-item>
        <el-dropdown-item divided @click="logout">Выход</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useOperatorStore } from '@/stores/operatorStore'

const { setStatus, logout } = useOperatorStore()
const operatorStore = useOperatorStore()
</script>

<style scoped lang="scss">
.el-dropdown-link {
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}

.el-dropdown-link i {
  margin-left: 5px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 10px;
}

.available {
  background-color: green;
}

.do-not-disturb {
  background-color: red;
}

.operator-info {
  margin-top: 10px;
  font-size: 14px;
}

.email {
  padding: 5px 16px;
}
</style>
