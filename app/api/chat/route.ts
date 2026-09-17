import { NextResponse } from 'next/server';

const system = `You are a friendly IELTS English teacher for Uzbek-speaking learners. Always answer primarily in Uzbek, include useful English examples, correct mistakes gently, and give IELTS-focused advice. If asked for an IELTS score, explain that it is an estimate and provide band criteria. Keep responses concise and practical.`;
export async function POST(request: Request) {
  const { message } = await request.json();
  if (!message || typeof message !== 'string') return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ reply: `Siz yozdingiz: “${message}”\n\nBu demo rejim. AI javoblarini yoqish uchun hosting sozlamalariga OPENAI_API_KEY qo‘shing. Hozir esa inglizcha jumla tuzib ko‘ring — men sizga xatolarni tushuntirishga tayyorman!` });
  const response = await fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', messages: [{ role: 'system', content: system }, { role: 'user', content: message }], temperature: 0.6 }) });
  if (!response.ok) return NextResponse.json({ reply: 'AI xizmatida vaqtinchalik xatolik yuz berdi. Keyinroq urinib ko‘ring.' }, { status: 502 });
  const data = await response.json(); return NextResponse.json({ reply: data.choices?.[0]?.message?.content || 'Javob topilmadi.' });
}
