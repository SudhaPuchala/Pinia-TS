
import { defineStore } from 'pinia'
import type { User, UserInput } from './types'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),

  actions: {
    generateId(): string {
      return Math.random().toString(36).substr(2, 9)
    },

    create(user: UserInput) {
      const id = this.generateId()
      this.users.push({ ...user, id })
    },

    delete(id: string) {
      this.users = this.users.filter((user: User) => user.id !== id)
    }
  },

  getters: {
    usersByName: (state): User[] =>
      [...state.users].sort((a, b) => a.name.localeCompare(b.name))
  }
})
