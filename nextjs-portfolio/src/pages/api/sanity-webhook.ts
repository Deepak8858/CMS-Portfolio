import type { NextApiRequest, NextApiResponse } from 'next';

// Optional: Set a secret in your webhook settings and check it here
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Optional: Validate webhook secret
  if (SANITY_WEBHOOK_SECRET && req.headers['x-sanity-webhook-signature'] !== SANITY_WEBHOOK_SECRET) {
    return res.status(401).json({ message: 'Invalid webhook secret' });
  }

  // Log the webhook payload
  console.log('Sanity webhook received:', req.body);

  // TODO: Add your revalidation, cache clearing, or other logic here

  return res.status(200).json({ received: true });
}
