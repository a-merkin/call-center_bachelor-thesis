<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  login: '',
  password: ''
})

const onSubmit = () => {
  router.push('/workplace')
}
</script>

<template>
  <el-form @keyup.enter="onSubmit" :model="form" style="background-color: #ffff; padding: 20px; border-radius: 15px">
    <el-form-item label="Логин">
      <el-input v-model="form.login" />
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Войти</el-button>
      <el-button type="text">Не помню пароль</el-button>
    </el-form-item>
  </el-form>
</template>
