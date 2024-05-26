/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// import type { ExecutionContext, Request } from "@cloudflare/workers-types";

export default {
	// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
	async fetch(_request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
		// try {
		// 	const e = await env.DB.prepare("SELECT * FROM jassi").all();
		// 	console.log({e})
		// } catch (error) {
		// 	console.log(error)
		// }
		await env.test.put("name", "Jassi");
		const val = await env.test.get("name");
		return Response.json({ name: val });
	},
};
