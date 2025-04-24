import { NextResponse, NextRequest } from 'next/server';
import type { Logger } from 'pino';

import { prisma } from '@/lib/prisma';
import { withLogger } from '@/lib/withLogger';

/**
 * @openapi
 * /announcements:
 *   get:
 *     summary: List all announcements
 *     description: Fetches all announcements, newest first.
 *     tags:
 *       - Announcements
 *     responses:
 *       '200':
 *         description: A JSON array of Announcement objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Announcement'
 */

export const GET = withLogger(async (req: NextRequest, { log }: { log: Logger }) => {
  const announcements = await prisma.announcement.findMany({
    orderBy: { createdAt: 'desc' },
  });
  log.info('Fetched announcements', { count: announcements.length });
  return NextResponse.json(announcements);
});
