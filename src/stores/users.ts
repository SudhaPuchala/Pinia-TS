
import { defineStore } from 'pinia'
import type { User, UserInput } from './types'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),

  actions: {
    generateId(): string {
      const id: string = Math.random().toString(36).slice(2, 11)
  return id
    },

    create(user: UserInput) {
      const id = this.generateId()
      this.users.push({ ...user, id })
    },

  
  },

  getters: {
    usersByName: (state): User[] =>
      [...state.users].sort((a, b) => a.name.localeCompare(b.name))
  }
})
