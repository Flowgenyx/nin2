import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { naam, email, telefoon, bericht } = await request.json();

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  const fieldNaam = process.env.AIRTABLE_FIELD_NAAM;
  const fieldEmail = process.env.AIRTABLE_FIELD_EMAIL;
  const fieldTelefoon = process.env.AIRTABLE_FIELD_TELEFOON;
  const fieldBericht = process.env.AIRTABLE_FIELD_BERICHT;

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        [fieldNaam!]: naam,
        [fieldEmail!]: email,
        [fieldTelefoon!]: telefoon,
        [fieldBericht!]: bericht,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
