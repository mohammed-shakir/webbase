import { NextResponse } from 'next/server';
import { getUsers, addUser } from '@/lib/users';

export async function GET() {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const newUser = await addUser(name, email);
  return NextResponse.json(newUser, { status: 201 });
}