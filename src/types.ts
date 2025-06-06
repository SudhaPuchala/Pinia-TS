export type User = {
    id: string
    name: string
    email: string
  }
  
  export type UserInput = Omit<User, 'id'>
  