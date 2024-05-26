<template>
  <VueFinalModal
    v-model="callStore.isModalOpen"
    style="display: flex; justify-content: center; align-items: center"
    width="600px"
    height="400px"
    :maskClosable="false"
  >
    <template #default>
      <div class="call-modal">
        <h3>Входящий звонок</h3>
        <p>От: {{ callerType }}</p>
        <p>Номер: {{ callerNumber }}</p>
        <div class="call-modal-actions">
          <el-button type="success" @click="acceptCall">Принять</el-button>
          <el-button type="danger" @click="rejectCall">Отклонить</el-button>
        </div>
      </div>
    </template>
  </VueFinalModal>
</template>

<script setup>
import { ref } from 'vue'
import { useCallStore } from '@/stores/callStore'
import { useVfm, VueFinalModal } from 'vue-final-modal'

const callStore = useCallStore()
const isCallModalVisible = ref(false)
const callerType = ref('абитуриента')
const callerNumber = ref('+79170474826')

const { openModal, closeModal } = useVfm()

const handleClose = () => {
  isCallModalVisible.value = false
}

const acceptCall = () => {
  // Логика принятия звонка
  console.log('Call accepted')
  callStore.closeModal()
}

const rejectCall = () => {
  callStore.closeModal()
}
</script>

<style scoped lang="scss">
.call-modal {
  padding: 20px;
  background-color: #fff;
}

.assign-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.call-modal {
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }

  .call-modal-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
}
</style>
