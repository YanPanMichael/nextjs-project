const koa = require("koa");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// app.prepare().then(() => {
const server = new koa();

// logger
server.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
server.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// server.use(async (ctx, next) => {
//   await handle(ctx.req, ctx.res);
//   ctx.respond = false;
//   await next()
// });

// response
server.use(async (ctx, next) => {
  const path = ctx.path;
  const method = ctx.method;
  ctx.body = `<span>page path: ${path} and method: ${method}</span>`;
  await next();
});

server.listen(3000, () => {
  console.log(`listen to port 3000`);
});
// });
