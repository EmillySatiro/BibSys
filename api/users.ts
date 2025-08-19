import serverless from "serverless-http";
import app from "../server/src/server.js";

export const GET = serverless(app);
export const POST = serverless(app);
export const PUT = serverless(app);
export const DELETE = serverless(app);
