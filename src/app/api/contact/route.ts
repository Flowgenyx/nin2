import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { naam, email, telefoon, bericht } = await request.json();

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        fldZr4EDnhLaWCir3: naam,
        fldOvj4lMaQKbhyFd: email,
        fldESz1YlZngIk3la: telefoon,
        flddl4ntzc6vhNcfB: bericht,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
