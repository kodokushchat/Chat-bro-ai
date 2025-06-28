// functions/api.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Example: get data from request body
    const { message } = req.body;

    // Example AI-like response
    const reply = `You said: "${message}". Here’s your AI-powered answer!`;

    res.status(200).json({ reply });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
