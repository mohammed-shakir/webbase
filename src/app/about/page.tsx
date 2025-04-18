import { getUsers } from '@/lib/users';

export const metadata = {
    title: 'About • MyApp',
}

type User = { id: number; name: string; email: string }

export default async function AboutPage() {
  const users: User[] = await getUsers();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">About</h2>
      <p>This is a demo of two API routes and two pages.</p>

      <div>
        <h3 className="text-2xl font-medium">Users</h3>
        <ul className="mt-2 space-y-1">
          {users.map((u) => (
            <li key={u.id} className="flex justify-between">
              <span>{u.name}</span>
              <small className="text-gray-500">{u.email}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}