// stores/callStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCallStore = defineStore('callStore', () => {
  const isModalOpen = ref(true);
  const callerType = ref<string | null>('Абитуриент');
  const incidentType = ref<string | null>('Приемная комиссия');
  const callerNumber = ref<string | null>('+79170474826');

  const openModal = (type: string, number: string, incident: string) => {
    callerType.value = type;
    callerNumber.value = number;
    incidentType.value = incident;
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    callerType.value = null;
    callerNumber.value = null;
    incidentType.value = null;
  };

  return { isModalOpen, callerType, callerNumber, incidentType, openModal, closeModal };
});
