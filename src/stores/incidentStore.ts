import { defineStore } from 'pinia';
import type { Incident } from '@/types/incident';

// Интерфейс для состояния store
interface IncidentState {
  incidents: Incident[];
  selectedIncidentId: number | null;
  isModalOpen: boolean;
}

export const useIncidentStore = defineStore('incident', {
  state: (): IncidentState => ({
    incidents: [
      {
        id: 1,
        fio: 'Меркин А.Д.',
        group: 'MTH-101',
        faculty: 'ИИМРТ',
        school: null,
        reason: 'Прошу разрешить пересдать экзамен по математике.',
        time: '15:38',
        date: '15.05',
        source: 'bot',
        phone: null,
        status: 'new'
      },
      {
        id: 2,
        fio: null,
        group: null,
        school: 'Школа №15',
        faculty: null,
        reason: 'Необходимо получить справку об обучении для предоставления в военкомат.',
        time: '10:20',
        date: '01.05',
        source: 'call',
        phone: '123-456-7890',
        status: 'in-progress'
      },
      {
        id: 3,
        fio: 'Петров В.И.',
        group: 'CSE-202',
        faculty: 'ИИМРТ',
        school: null,
        reason:
          'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
        time: '08:45',
        date: '14.04',
        source: 'bot',
        phone: null,
        status: 'completed'
      },
      {
        id: 4,
        fio: 'Петров В.И.',
        group: 'CSE-202',
        faculty: 'ИИМРТ',
        school: null,
        reason:
          'Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.',
        time: '08:45',
        date: '14.04',
        source: 'bot',
        phone: null,
        status: 'cancelled'
      },
      // More incidents...
    ],
    selectedIncidentId: null,
    isModalOpen: false,
  }),

  getters: {
    // Пример геттера для получения количества инцидентов
    selectedIncident: (state) => {
      return state.incidents.find((incident) => incident.id === state.selectedIncidentId) || null;
    },
  },

  actions: {
    // Действие для добавления нового инцидента
    addIncident(incident: Incident) {
      this.incidents.push(incident);
    },

    // Действие для обновления инцидента
    updateIncident(updatedIncident: Incident) {
      const index = this.incidents.findIndex((incident) => incident.id === updatedIncident.id);
      if (index !== -1) {
        this.incidents.splice(index, 1, updatedIncident);
      }
    },

    // Действие для удаления инцидента
    deleteIncident(id: number) {
      this.incidents = this.incidents.filter((incident) => incident.id !== id);
    },

    // Действие для выбора текущего инцидента
    selectIncident(id: number) {
      this.selectedIncidentId = id;
    },

    // Действие для очистки выбранного инцидента
    clearSelectedIncident() {
      this.selectedIncidentId = null;
    },

    openModal() {
      this.isModalOpen = true;
    },

    // Действие для закрытия модального окна
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
