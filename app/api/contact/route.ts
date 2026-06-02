import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      company,
      companySize,
      phone,
      message,
    } = body

    // Validate required fields
    if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
      return NextResponse.json(
        { ok: false, error: 'First name is required.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Email address is required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log submission (replace with HubSpot / CRM integration)
    console.log('[contact] New contact form submission:', {
      firstName: firstName.trim(),
      lastName: lastName?.trim() ?? '',
      email: email.trim(),
      company: company?.trim() ?? '',
      companySize: companySize ?? '',
      phone: phone?.trim() ?? '',
      message: message?.trim() ?? '',
      timestamp: new Date().toISOString(),
    })

    // TODO: integrate HubSpot forms API
    // Example:
    // await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     fields: [
    //       { name: 'firstname', value: firstName },
    //       { name: 'lastname', value: lastName },
    //       { name: 'email', value: email },
    //       { name: 'company', value: company },
    //       { name: 'phone', value: phone },
    //       { name: 'message', value: message },
    //     ],
    //   }),
    // })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Error processing contact form submission:', error)
    return NextResponse.json(
      { ok: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
