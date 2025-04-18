import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('Feedback received:', { name, email, message })

    return NextResponse.json({ success: true, message: 'Thank you for your feedback!' })
  } catch (err) {
    console.error('Feedback error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}