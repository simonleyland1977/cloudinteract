import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, interest, message } = body;

        // Validate required fields
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // For now, we'll use the Amplify Data API from the client side
        // This endpoint will just validate and pass through
        // The actual CRM creation will happen client-side with public API access

        return NextResponse.json({
            success: true,
            message: 'Thank you! We\'ll be in touch soon.',
            data: {
                email,
                name: [firstName, lastName].filter(Boolean).join(' '),
                company,
                interest,
                message
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
