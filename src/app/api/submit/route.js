import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    console.log('Request body:', body)

    // Destructure contactNumber and website as optional
    const { name, email, website, contactNumber, service, message } = body

    // Only name, email, service, and message are required
    if (!name || !email || !service || !message) {
      console.log('Missing field:', { name, email, service, message })
      return Response.json({ success: false, error: 'Missing required fields.' }, { status: 400 })
    }

    const submission = await prisma.submission.create({
      data: {
        name,
        email,
        website: website || null,               // Save null if empty
        contactNumber: contactNumber || null,   // Save null if empty
        service,
        message,
      }
    })

    console.log('Submission successful:', submission)

    return Response.json({ success: true, submission })
  } catch (error) {
    console.error('API error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
