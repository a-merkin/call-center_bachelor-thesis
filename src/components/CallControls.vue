<!-- components/CallControls.vue -->
<template>
  <div class="call-controls" v-if="callStore.isCallActive">
    <div class="call-info">
      <div class="call-info__details">
        <p><strong>Текущий звонок:</strong></p>
        <p>От: {{ callStore.callerType }}</p>
        <p>Номер: {{ callStore.callerNumber }}</p>
      </div>
      <div class="call-info__actions">
        <p class="call-info__timer">Время звонка: {{ callStore.elapsedTime }}</p>
        <div>
          <el-button type="danger" @click="hangUpCall">Сбросить</el-button>
          <el-button type="warning" @click="blockUser">Заблокировать</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCallStore } from '@/stores/callStore';

const callStore = useCallStore();

const hangUpCall = () => {
  // Logic to hang up the call
  console.log('Call hung up');
  callStore.endCall();
};

const blockUser = () => {
  // Logic to block the user
  console.log('User blocked');
  callStore.blockCaller();
};
</script>

<style scoped lang="scss">
.call-controls {
  padding: 7px 20px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .call-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__details {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__timer {
      margin-bottom: 10px;
      font-size: 18px;
      color: #333;
    }

    &__actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    p {
      margin: 0;
      font-size: 14px;

      & + p {
        margin-top: 5px;
      }

      strong {
        font-size: 16px;
      }
    }

    .el-button {
      min-width: 100px;
    }
  }
}
</style>
