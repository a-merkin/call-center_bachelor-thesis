<template>
  <div class="chat" @keyup.enter="sendMessage">
    <div class="chat__container">
      <el-card class="chat__window">
        <div class="chat__messages">
          <div v-for="message in messages" :key="message.id" class="chat__message">
            <div class="chat__message-meta">{{ message.full_name }} - {{ message.time }}</div>
            <div class="chat__message-text">{{ message.last_message }}</div>
          </div>
        </div>
      </el-card>
    </div>
    <el-card body-class="chat__input-container">
      <el-input
        v-model="newMessage"
        placeholder="Введите ваше сообщение"
        class="chat__input-message"
      ></el-input>
      <el-button type="primary" @click="sendMessage" class="chat__send-button">Отправить</el-button>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Message {
  id: number
  title: string
  full_name: string
  last_message: string
  time: string
}

export default defineComponent({
  name: 'Chat',
  setup() {
    const messages = ref<Message[]>([
      {
        id: 1,
        title: 'Утечка газа',
        full_name: 'Меркин А.Д',
        last_message: 'Text text text',
        time: '15:38'
      },
      {
        id: 2,
        title: 'Проблема с водоснабжением',
        full_name: 'Иванова Е.С',
        last_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: '10:20'
      },
      {
        id: 3,
        title: 'Повреждение дороги',
        full_name: 'Петров В.И',
        last_message:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        time: '08:45'
      },
      {
        id: 4,
        title: 'Утечка газа',
        full_name: 'Оператор',
        last_message: 'Принято. Специалист уже выехал на место.',
        time: '15:40'
      },
      {
        id: 5,
        title: 'Утечка газа',
        full_name: 'Меркин А.Д',
        last_message: 'Спасибо за оперативность.',
        time: '15:42'
      }
    ])
    const newMessage = ref<string>('')

    const sendMessage = () => {
      if (newMessage.value.trim() !== '') {
        const newMessageObject: Message = {
          id: messages.value.length + 1,
          title: 'Название', // Замените на нужное название
          full_name: 'Оператор', // Замените на имя отправителя
          last_message: newMessage.value.trim(),
          time: new Date().toLocaleTimeString()
        }
        messages.value.push(newMessageObject)
        newMessage.value = ''
      }
    }

    return { messages, newMessage, sendMessage }
  }
})
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__container {
    flex: 1;
    overflow-y: auto;

    &__window {
      height: 100%;

      &__messages {
        display: flex;
        flex-direction: column;

        &__message {
          margin-bottom: 10px;

          &__meta {
            font-weight: bold;
          }
        }
      }
    }
  }

  &__input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    &__input-message {
      margin-right: 10px;
    }

    &__send-button {
      width: 100px;
    }
  }
}
</style>
