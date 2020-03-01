const koa = require("koa");
const Router = require("koa-router");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new koa();
  const router = new Router();

  // router.get("/test/:id", ctx => {
  //   // ctx.body = `<p>request /test ${ctx.params.id}</p>`
  //   ctx.body = {
  //     success: true,
  //     data: { name: "koa ctx", id: `${ctx.params.id}` }
  //   };
  //   ctx.set("Context-Type", "application/json");
  // });

  router.get("/subs/b/:id", async ctx => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/subs/b",
      query: { id }
    })
    ctx.respond = false;
  });
  
  server.use(router.routes());
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // server.use(async (ctx, next) => {
  //   await next();
  // });

  // server.use(router.routes());

  // logger
  // server.use(async (ctx, next) => {
  //   await next();
  //   const rt = ctx.response.get("X-Response-Time");
  //   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  // });

  // // x-response-time
  // server.use(async (ctx, next) => {
  //   const start = Date.now();
  //   await next();
  //   const ms = Date.now() - start;
  //   ctx.set("X-Response-Time", `${ms}ms`);
  // });

  // response
  // server.use(async (ctx, next) => {
  //   const path = ctx.path;
  //   const method = ctx.method;
  //   ctx.body = `<span>page path: ${path} and method: ${method}</span>`;
  //   await next();
  // });

  server.listen(3000, () => {
    console.log(`listen to port 3000`);
  });
});
