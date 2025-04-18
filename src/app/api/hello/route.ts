import { NextResponse } from 'next/server'
import { getHelloMessage } from '@/lib/hello'

export async function GET() {
  const data = await getHelloMessage()
  return NextResponse.json(data)
}