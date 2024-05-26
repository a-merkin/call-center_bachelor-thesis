<template>
  <div class="login-container">
    <el-form
      @keyup.enter="onSubmit"
      :model="form"
      class="login-form"
    >
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
  </div>
</template>

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

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #409eff 100%);
}

.login-form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
