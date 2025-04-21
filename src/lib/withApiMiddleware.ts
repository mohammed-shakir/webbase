import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import helmet from "helmet";

export function withApiMiddleware(handler: NextApiHandler) {
  return nc<NextApiRequest, NextApiResponse>().use(helmet()).use(handler);
}
