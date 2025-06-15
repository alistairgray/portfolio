// netlify/functions/chat.js
const fs = require('fs');
const path = require('path');
const cvData = require('./cvEmbeddings.json');

// ---- tiny helpers ----
const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
const mag = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const cosine = (a, b) => dot(a, b) / (mag(a) * mag(b));

async function embed(text) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
    }),
  }).then((r) => r.json());

  return res.data[0].embedding;
}

exports.handler = async (event) => {
  try {
    const { messages } = JSON.parse(event.body);
    const userMsg = messages[messages.length - 1].content;

    // 1) embed user question
    const qVec = await embed(userMsg);

    // 2) pick top‑3 résumé chunks
    const context = cvData
      .map((c) => ({ ...c, score: cosine(qVec, c.vector) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((c) => c.text)
      .join('\n\n');

    // 3) system prompt with fallback line
    const systemPrompt = {
      role: 'system',
      content: `
You are Alistair‑Bot.  Use ONLY this context to answer.

"""${context}"""

If the question is unrelated to Alistair Gray’s background or work, reply:
"Sorry, I only answer questions about Alistair Gray’s background and work."
`.trim(),
    };

    const openaiRes = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [systemPrompt, ...messages.slice(-6)],
          max_tokens: 300,
          temperature: 0.7,
        }),
      }
    ).then((r) => r.json());

    return {
      statusCode: 200,
      body: JSON.stringify(openaiRes),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
