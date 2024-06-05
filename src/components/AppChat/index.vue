<template>
  <div class="chat-container">
    <el-card class="chat-window">
      <el-scrollbar style="border-right: 1px solid #dcdfe6" :height="chatContainerHeight">
        <div class="chat-messages" ref="messageList">
          <div
            v-for="message in messages"
            :key="message.id"
            :class="[
              'chat-message',
              message.sender === 'operator' ? 'operator-message' : 'user-message'
            ]"
          >
            <span>{{ message.text }}</span>
          </div>
        </div>
      </el-scrollbar>
    </el-card>
    <div class="chat-input">
      <el-input
        v-model="newMessage"
        placeholder="Введите сообщение"
        @keyup.enter.native="sendMessage"
        :rows="2"
      />
      <el-button type="primary" @click="sendMessage">Отправить</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { ElMessage } from 'element-plus'
import { useCallStore } from '@/stores/callStore';

const callStore = useCallStore();

interface Message {
  id: number
  text: string
  sender: 'operator' | 'user'
}

const messages: Ref<Message[]> = ref([
  { id: 1, text: 'Здравствуйте! Как я могу вам помочь?', sender: 'operator' },
  { id: 2, text: 'Не могу зайти в СДО', sender: 'user' }
])

const newMessage: Ref<string> = ref('')

const chatContainerHeight: ComputedRef<string> = computed(() => {
  return callStore.isCallActive ? 'calc(100vh - 280px)' : 'calc(100vh - 180px)'
})

const sendMessage = () => {
  if (newMessage.value.trim() === '') {
    ElMessage.warning('Сообщение не может быть пустым')
    return
  }
  messages.value.push({ id: Date.now(), text: newMessage.value, sender: 'operator' })
  newMessage.value = ''
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    const messageList = document.querySelector('.chat-messages') as HTMLElement
    messageList.scrollTop = messageList.scrollHeight
  })
}

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped lang="scss">
.chat-container {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100%;
}

.chat-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
}

.chat-message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.operator-message {
  background-color: #e3f2fd;
  text-align: left;
}

.user-message {
  background-color: #c8e6c9;
  text-align: right;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: #fff;
  border-top: 1px solid #eaeaea;
}

.chat-input el-input {
  flex: 1;
  margin-right: 10px;
}
</style>
