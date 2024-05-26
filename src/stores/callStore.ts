import { defineStore } from 'pinia';

// Интерфейс для состояния store
interface CallState {
  isModalOpen: boolean;
}

export const useCallStore = defineStore('call', {
  state: (): CallState => ({
    isModalOpen: true,
  }),

  actions: {
    openModal() {
      this.isModalOpen = true;
    },

    // Действие для закрытия модального окна
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
