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
    "id": 18,
    "fio": null,
    "group": null,
    "faculty": null,
    "school": null,
    "reason": "Приемная комиссия",
    "time": "15:38",
    "date": "15.05",
    "source": "call",
    "phone": '+79170474826',
    "status": "new"
  },
  {
    "id": 1,
    "fio": "Меркин А.Д.",
    "group": "MTH-101",
    "faculty": "ИИМРТ",
    "school": null,
    "reason": "Прошу разрешить пересдать экзамен по математике.",
    "time": "15:38",
    "date": "15.05",
    "source": "bot",
    "phone": null,
    "status": "new"
  },
  {
    "id": 14,
    "fio": null,
    "group": null,
    "school": "Школа №45",
    "faculty": null,
    "reason": "Необходимо получить дубликат свидетельства.",
    "time": "14:55",
    "date": "18.04",
    "source": "call",
    "phone": "456-789-0123",
    "status": "new"
  },
  {
    "id": 6,
    "fio": "Сидоров П.П.",
    "group": "BIO-303",
    "faculty": "ФИТ",
    "school": null,
    "reason": "Прошу перенести лабораторную работу.",
    "time": "09:15",
    "date": "18.05",
    "source": "bot",
    "phone": null,
    "status": "in-progress"
  },
  {
    "id": 12,
    "fio": "Михайлов М.М.",
    "group": "MTH-102",
    "faculty": "ИИМРТ",
    "school": null,
    "reason": "Прошу организовать пересдачу зачета.",
    "time": "11:50",
    "date": "25.04",
    "source": "bot",
    "phone": null,
    "status": "in-progress"
  },
  {
    "id": 3,
    "fio": "Петров В.И.",
    "group": "CSE-202",
    "faculty": "ИИМРТ",
    "school": null,
    "reason": "Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.",
    "time": "08:45",
    "date": "14.04",
    "source": "bot",
    "phone": null,
    "status": "completed"
  },
  {
    "id": 4,
    "fio": "Петров В.И.",
    "group": "CSE-202",
    "faculty": "ИИМРТ",
    "school": null,
    "reason": "Прошу предоставить информацию о количестве кредитов, необходимых для завершения курса.",
    "time": "08:45",
    "date": "14.04",
    "source": "bot",
    "phone": null,
    "status": "cancelled"
  },
  {
    "id": 9,
    "fio": "Николаев В.В.",
    "group": "CHE-101",
    "faculty": "ФЭУ",
    "school": null,
    "reason": "Прошу организовать консультацию по курсовой работе.",
    "time": "13:45",
    "date": "05.05",
    "source": "bot",
    "phone": null,
    "status": "cancelled"
  },
  {
    "id": 5,
    "fio": "Иванов И.И.",
    "group": "PHY-202",
    "faculty": "ФЭУ",
    "school": null,
    "reason": "Прошу предоставить дополнительный учебный материал.",
    "time": "11:22",
    "date": "21.05",
    "source": "bot",
    "phone": null,
    "status": "cancelled"
  },
  {
    "id": 15,
    "fio": "Васильев Е.Е.",
    "group": "CHE-201",
    "faculty": "ФЭУ",
    "school": null,
    "reason": "Прошу предоставить учебные материалы по химии.",
    "time": "09:20",
    "date": "15.04",
    "source": "bot",
    "phone": null,
    "status": "cancelled"
  }
],
    selectedIncidentId: 18,
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
