<template>
  <VueFinalModal
    v-model="callStore.isModalOpen"
    style="display: flex; justify-content: center; align-items: center"
    width="500px"
    height="350px"
    :maskClosable="false"
  >
    <template #default>
      <div class="call-modal">
        <h3>Входящий звонок</h3>
        <p><strong>От:</strong> {{ callStore.callerType }}</p>
        <p><strong>Тип обращеня:</strong> {{ callStore.incidentType }}</p>
        <p><strong>Номер:</strong> {{ callStore.callerNumber }}</p>
        <div class="call-modal-actions">
          <el-button type="success" @click="acceptCall">Принять</el-button>
          <el-button type="danger" @click="rejectCall">Отклонить</el-button>
        </div>
      </div>
    </template>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { useCallStore } from '@/stores/callStore';
import { useVfm, VueFinalModal } from 'vue-final-modal';

const callStore = useCallStore();

const acceptCall = () => {
  // Logic to accept the call
  console.log('Call accepted');
  callStore.startCall();
};

const rejectCall = () => {
  callStore.closeModal();
};
</script>

<style scoped lang="scss">
.call-modal {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
    color: #555;

    strong {
      color: #333;
    }
  }

  .call-modal-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    .el-button {
      width: 100px;
    }
  }
}
</style>
