<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ operatorName }}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="setStatus('В работе')">В работе</el-dropdown-item>
        <el-dropdown-item @click="setStatus('Не беспокоить')">Не беспокоить</el-dropdown-item>
        <el-dropdown-item divided @click="logout">Выход</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const operatorName = ref('Аркадий Паравозов')
const operatorStatus = ref('В работе')

const setStatus = (status) => {
  operatorStatus.value = status
  ElMessage.success(`Статус изменен на: ${status}`)
}

const logout = () => {
  ElMessage.info('Выход из аккаунта')
  // Логика выхода из аккаунта
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-dropdown-link i {
  margin-left: 5px;
}
</style>
