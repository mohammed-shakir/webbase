// lib/users.ts
export interface User {
    id: number
    name: string
    email: string
  }
  
  const _users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob',   email: 'bob@example.com' },
  ]
  
  export async function getUsers(): Promise<User[]> {
    return _users
  }
  
  export async function addUser(name: string, email: string): Promise<User> {
    const nextId = _users.length + 1
    const newUser = { id: nextId, name, email }
    _users.push(newUser)
    return newUser
  }
  