<template>
  <div class="incident-info">
    <el-card class="incident-info__card">
      <div class="incident-info__item">
        <label class="incident-info__label">Дата:</label>
        <el-date-picker v-model="incident.date" type="date" placeholder="Выберите дату" class="incident-info__input"></el-date-picker>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">ФИО заявителя:</label>
        <el-input v-model="incident.applicantName" placeholder="Введите ФИО заявителя" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Опасность для окружающих:</label>
        <el-switch v-model="incident.dangerous" inactive-color="#13ce66" active-color="#ff4949" class="incident-info__switch"></el-switch>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Описание инцидента:</label>
        <el-input v-model="incident.description" type="textarea" rows="3" placeholder="Введите описание инцидента" class="incident-info__input"></el-input>
      </div>
      <div class="incident-info__item">
        <label class="incident-info__label">Требуемые службы:</label>
        <el-checkbox-group v-model="incident.requiredServices" class="incident-info__checkbox-group">
          <el-checkbox label="Полиция"></el-checkbox>
          <el-checkbox label="Скорая помощь"></el-checkbox>
          <el-checkbox label="Пожарные"></el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Incident {
  date: string;
  applicantName: string;
  dangerous: boolean;
  description: string;
  requiredServices: string[];
}

export default defineComponent({
  name: 'IncidentInfo',
  setup() {
    const incident = ref<Incident>({
      date: '',
      applicantName: '',
      dangerous: false,
      description: '',
      requiredServices: []
    });

    return { incident };
  }
});
</script>

<style lang="scss" scoped>
.incident-info {
  &__card {
    margin-bottom: 20px;
    height: 100%
  }

  &__item {
    margin-bottom: 20px;
  }

  &__label {
    font-weight: bold;
    display: block;
  }

  &__input {
    width: 100%;
  }

  &__switch {
    margin-top: 5px;
  }

  &__checkbox-group {
    display: flex;
    flex-direction: column;
  }
}
</style>
