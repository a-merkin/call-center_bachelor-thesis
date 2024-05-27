// stores/operatorStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

export const useOperatorStore = defineStore('operator', () => {
  const operatorName = ref('Аркадий Паравозов');
  const operatorEmail = ref('arkadiy.paravozov@example.com');
  const operatorStatus = ref('В работе');

  const setStatus = (status: string) => {
    operatorStatus.value = status;
    ElMessage.success(`Статус изменен на: ${status}`);
  };

  const logout = () => {
    ElMessage.info('Выход из аккаунта');
    // Логика выхода из аккаунта
  };

  return {
    operatorName,
    operatorEmail,
    operatorStatus,
    setStatus,
    logout
  };
});
