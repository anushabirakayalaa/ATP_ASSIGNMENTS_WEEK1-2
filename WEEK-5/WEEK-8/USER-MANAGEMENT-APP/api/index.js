import app, { connectDB } from '../BACKEND/server.js';

export default async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (err) {
    console.error('API startup failed', err);
    return res.status(500).json({
      message: 'API startup failed',
      reason: err.message,
    });
  }
}
