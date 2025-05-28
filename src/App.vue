<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from './stores/users'
import type { UserInput } from './types'

const store = useUserStore()

const userInput = ref<UserInput>({
  name: '',
  email: ''
})

const sort = ref(false)

const users = computed(() =>
  sort.value ? store.usersByName : store.users
)

const createUser = () => {
  if (!userInput.value.name.trim() || !userInput.value.email.trim()) {
    return alert('Please enter a name and email')
  }

  store.create(userInput.value)
  userInput.value = { name: '', email: '' }
}
</script>

<template>
  <main>
    <h1>Team Manager</h1>

    <form @submit.prevent="createUser">
      <input type="text" placeholder="Name" v-model="userInput.name" />
      <input type="email" placeholder="Email" v-model="userInput.email" />
      <input type="submit" value="Create User" />
    </form>

    <label>
      <span>Sort</span>
      <input type="checkbox" v-model="sort" />
    </label>

    <div class="users">
      <div v-for="user in users" :key="user.id" class="user">
        <div>ID: {{ user.id }}</div>
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </main>
</template>
