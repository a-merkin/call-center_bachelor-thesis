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
        <label class="incident-info__label">Группа/Школа:</label>
        <el-input v-model="incident.groupSchool" placeholder="Введите группу или школу" class="incident-info__input"></el-input>
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

interface Incident {
  date: string;
  fio: string;
  phone: string;
  groupSchool: string;
  reason: string;
  status: 'new' | 'in-progress' | 'completed' | 'cancelled';
}

export default defineComponent({
  name: 'IncidentInfo',
  setup() {
    const incident = ref<Incident>({
      date: '',
      fio: '',
      phone: '',
      groupSchool: '',
      reason: '',
      status: 'new'
    });

    return { incident };
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
