import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant for Hiren Patel, a Data Scientist, AI Developer, and Technical Leader. 
          Your role is to help recruiters and potential employers learn more about Hiren's qualifications, experience, and skills.
          Always be professional and focus on highlighting Hiren's strengths and experience in data science, AI development, and technical leadership.
          If asked about personal matters unrelated to recruitment, politely redirect the conversation to professional topics.
          Base your responses on these key points about Hiren:
          - Expertise in Data Science and AI Development
          - Strong Technical Leadership background
          - Focus on transforming data into intelligent decisions
          - Professional experience in implementing AI solutions`
        },
        ...messages
      ] as any,
    });

    // @ts-ignore - the type issue is a known problem with the current version
    return new StreamingTextResponse(OpenAIStream(response));
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
