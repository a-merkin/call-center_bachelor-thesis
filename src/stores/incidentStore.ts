import { defineStore } from 'pinia';
import type { Incident } from '@/types/incident';

// Интерфейс для состояния store
interface IncidentState {
  incidents: Incident[];
  selectedIncident: Incident | null;
}

export const useIncidentStore = defineStore('incident', {
  state: (): IncidentState => ({
    incidents: [],
    selectedIncident: null,
  }),

  getters: {
    // Пример геттера для получения количества инцидентов
    incidentCount: (state) => state.incidents.length,
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
    selectIncident(incident: Incident) {
      this.selectedIncident = incident;
    },

    // Действие для очистки выбранного инцидента
    clearSelectedIncident() {
      this.selectedIncident = null;
    },
  },
});
