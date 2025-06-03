
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User, UserInput } from '../types'

export const useUserStore = defineStore('users', () => {
  const users = ref<User[]>([])

  function generateId(): string {
    return Math.random().toString(36).slice(2, 11)
  }

  function create(user: UserInput) {
    const id = generateId()
    users.value.push({ ...user, id })
  }

  const usersByName = computed(() =>
    [...users.value].sort((a, b) => a.name.localeCompare(b.name))
  )

  return {
    users,
    create,
    generateId,
    usersByName
  }
})