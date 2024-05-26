import { Hono } from "hono";
import type { KVNamespace, D1Database } from "@cloudflare/workers-types";

type Env = {
	test: KVNamespace;
	DB: D1Database;
	// Environment Variables
	SECRET_KEY: string;
	API_HOST: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (ctx) => {
	const name = await ctx.env.test.get("name");
	return ctx.json({ name, secret: ctx.env.SECRET_KEY, apiHost: ctx.env.API_HOST });
});

export default app;

/** -- use this if this worker required for fetch + other events ---
const app = new Hono()

export default {
  fetch: app.fetch,
  scheduled: async (batch, env) => {},
}
 */
