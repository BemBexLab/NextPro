import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    console.log('Request body:', body) // <--- LOG BODY
    const { name, email, website, service, message } = body

    if (!name || !email || !website || !service || !message) {
      console.log('Missing field:', { name, email, website, service, message })
      return Response.json({ success: false, error: 'Missing required fields.' }, { status: 400 })
    }

    const submission = await prisma.submission.create({
      data: { name, email, website, service, message }
    })

    console.log('Submission successful:', submission) // <--- LOG SUCCESS

    return Response.json({ success: true, submission })
  } catch (error) {
    console.error('API error:', error) // <--- LOG ERROR
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
