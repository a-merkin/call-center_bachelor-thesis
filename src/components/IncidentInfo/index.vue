<template>
  <div class="incident-info">
    <el-card class="incident-info__card">
      <div class="incident-info__item">
        <label class="incident-info__label">Дата:</label>
        <el-date-picker v-model="incident.date" type="date" placeholder="Выберите дату" class="incident-info__input"></el-date-picker>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">ФИО:</label>
        <el-input v-model="incident.fio" placeholder="Введите ФИО" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Телефон:</label>
        <el-input v-model="incident.phone" placeholder="Введите номер телефона" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item" v-if="incident.group || (!incident.group && !incident.school)">
        <label class="incident-info__label">Группа:</label>
        <el-input v-model="incident.group" placeholder="Введите группу" class="incident-info__input" @input="onGroupInput"></el-input>
      </div>
      <div class="incident-info__item" v-if="incident.group">
        <label class="incident-info__label">Факультет:</label>
        <el-input v-model="incident.faculty" placeholder="Введите факультет" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item" v-if="incident.school || (!incident.group && !incident.school)">
        <label class="incident-info__label">Школа:</label>
        <el-input v-model="incident.school" placeholder="Введите школу" class="incident-info__input" @input="onSchoolInput"></el-input>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Описание обращения:</label>
        <el-input v-model="incident.reason" type="textarea" rows="3" placeholder="Введите описание обращения" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Статус:</label>
        <el-select v-model="incident.status" placeholder="Выберите статус" class="incident-info__input">
          <el-option label="Новое" value="new"></el-option>
          <el-option label="В работе" value="in-progress"></el-option>
          <el-option label="Выполнено" value="completed"></el-option>
          <el-option label="Отменено" value="cancelled"></el-option>
        </el-select>
      </div>
      <div class="incident-info__actions">
        <el-button type="primary" @click="saveIncident">Сохранить</el-button>
        <el-button @click="openAssignModal">Распределить</el-button>
        <el-button @click="clearSelectedIncident">Очистить</el-button>
      </div>
    </el-card>
    <AssignModal />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { useIncidentStore } from '@/stores/incidentStore';
import AssignModal from '@/components/AssignModal.vue';
import type { Incident } from '@/types/incident';

interface IncidentInfo {
  id: number;
  fio: string | null;
  group: string | null;
  faculty: string | null;
  school: string | null;
  reason: string;
  time: string;
  date: string;
  source: 'call' | 'bot';
  phone: string | null;
  status: 'new' | 'in-progress' | 'completed' | 'cancelled';
}

export default defineComponent({
  name: 'IncidentInfo',
  components: { AssignModal },
  setup() {
    const incidentStore = useIncidentStore();
    const incident = ref<IncidentInfo>({
      id: 0,
      fio: null,
      group: null,
      faculty: null,
      school: null,
      reason: '',
      time: '',
      date: '',
      source: 'bot',
      phone: null,
      status: 'new'
    });

    const selectedIncident = computed(() => incidentStore.selectedIncident);

    watch(selectedIncident, (newIncident) => {
      if (newIncident) {
        incident.value = { ...newIncident };
      }
    }, { immediate: true });

    const onGroupInput = () => {
      if (incident.value.group) {
        incident.value.school = null;
      }
    };

    const onSchoolInput = () => {
      if (incident.value.school) {
        incident.value.group = null;
        incident.value.faculty = null;
      }
    };

    const saveIncident = () => {
      if (incident.value.id) {
        incidentStore.updateIncident(incident.value as Incident);
      } else {
        incident.value.id = Date.now();
        incidentStore.addIncident(incident.value as Incident);
      }
      incidentStore.clearSelectedIncident();
    };

    const clearSelectedIncident = () => {
      incidentStore.clearSelectedIncident();
    };

    const openAssignModal = () => {
      incidentStore.openModal();
    };

    return { incident, onGroupInput, onSchoolInput, saveIncident, clearSelectedIncident, openAssignModal };
  }
});
</script>

<style lang="scss" scoped>
.incident-info {
  &__card {
    width: 100%;
    height: 100%;
  }

  &__item {
    margin-bottom: 20px;
  }

  &__label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  &__input {
    width: 100%;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>