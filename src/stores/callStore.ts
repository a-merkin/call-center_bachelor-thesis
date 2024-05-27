// stores/callStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCallStore = defineStore('callStore', () => {
  const isModalOpen = ref(true);
  const callerType = ref<string | null>('Абитуриент');
  const incidentType = ref<string | null>('Приемная комиссия');
  const callerNumber = ref<string | null>('+79170474826');
  const isCallActive = ref(false);
  const callStartTime = ref<number | null>(null);
  const elapsedTime = ref<string>('00:00');

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

  const startCall = () => {
    isCallActive.value = true;
    callStartTime.value = Date.now();
    startTimer();
    isModalOpen.value = false;
  };

  const endCall = () => {
    isCallActive.value = false;
    callerType.value = null;
    callerNumber.value = null;
    callStartTime.value = null;
    elapsedTime.value = '00:00';
  };

  const blockCaller = () => {
    // Logic to block the caller
    console.log('Blocking caller:', callerNumber.value);
    endCall();
  };

  const startTimer = () => {
    setInterval(() => {
      if (callStartTime.value) {
        const now = Date.now();
        const diff = now - callStartTime.value;
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        elapsedTime.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);
  };

  return { isModalOpen, callerType, callerNumber, incidentType, isCallActive, callStartTime, elapsedTime, openModal, closeModal, startCall, endCall, blockCaller };
});
