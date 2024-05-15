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
      <div class="incident-info__item">
        <label class="incident-info__label">Группа:</label>
        <el-input v-model="incident.group" placeholder="Введите группу" class="incident-info__input" @input="onGroupInput"></el-input>
      </div>
      <div class="incident-info__item" v-if="incident.group">
        <label class="incident-info__label">Факультет:</label>
        <el-input v-model="incident.faculty" placeholder="Введите факультет" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item">
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
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
  setup() {
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

    return { incident, onGroupInput, onSchoolInput };
  }
});
</script>

<style lang="scss" scoped>
.incident-info {
  &__card {
    margin-bottom: 20px;
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
}
</style>
