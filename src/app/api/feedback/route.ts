export const runtime = 'nodejs';

import { NextResponse, NextRequest } from 'next/server';
import type { Logger } from 'pino';

import { withLogger } from '@/lib/withLogger';

/**
 * @openapi
 * /feedback:
 *   post:
 *     summary:    Submit user feedback
 *     tags:
 *       - Feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FeedbackRequest'
 *     responses:
 *       '200':
 *         description: Acknowledgement of receipt.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FeedbackResponse'
 *       '400':
 *         description: Missing required fields.
 */

export const POST = withLogger(async (req: NextRequest, { log }: { log: Logger }) => {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!email || !message) {
      log.warn('Missing required fields', { body });
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    log.info({ name, email, message }, 'Feedback received');

    return NextResponse.json({
      success: true,
      message: 'Thank you for your feedback!',
    });
  } catch (err) {
    log.error({ err }, 'Error processing feedback');
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
});
