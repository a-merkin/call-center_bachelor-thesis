<template>
  <VueFinalModal
    v-model="incidentStore.isModalOpen"
    style="display: flex; justify-content: center; align-items: center"
    width="600px"
    height="400px"
    :maskClosable="false"
  >
    <template #default>
      <div class="assign-modal">
        <h2>Распределение заявки по отделам</h2>
        <el-select v-model="selectedDepartment" placeholder="Выберите отдел">
          <el-option label="Учебный отдел" value="department1"></el-option>
          <el-option label="Приемная комиссия" value="Приемная комисси"></el-option>
          <el-option label="Канцелярия" value="department3"></el-option>
          <el-option label="Бухгалтерия" value="department4"></el-option>
          <el-option label="Отдел кадров" value="department5"></el-option>
          <el-option label="Библиотека" value="department6"></el-option>
          <el-option label="IT-отдел" value="department7"></el-option>
          <el-option label="Студенческий совет" value="department8"></el-option>
          <el-option label="Научный отдел" value="department9"></el-option>
          <el-option label="Отдел международных связей" value="department10"></el-option>
          <el-option label="Отдел безопасности" value="department11"></el-option>
        </el-select>
        <div class="assign-modal__actions">
          <el-button type="primary" @click="assignIncident">Назначить</el-button>
          <el-button @click="closeModalHandler">Отмена</el-button>
        </div>
      </div>
    </template>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIncidentStore } from '@/stores/incidentStore'
import { useVfm, VueFinalModal } from 'vue-final-modal'

const incidentStore = useIncidentStore()
const isModalOpen = ref(incidentStore.isModalOpen)

const selectedDepartment = ref<string | null>(null)

const assignIncident = () => {
  if (incidentStore.selectedIncidentId && selectedDepartment.value) {
    // Логика назначения заявки отделу
    console.log(
      `Инцидент ${incidentStore.selectedIncidentId} назначен отделу ${selectedDepartment.value}`
    )
    incidentStore.isModalOpen = false
  }
}

const closeModalHandler = () => {
  incidentStore.closeModal()
}
</script>

<style scoped lang="scss">
.assign-modal {
  padding: 20px;
  background-color: #fff;
}

.assign-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
</style>
