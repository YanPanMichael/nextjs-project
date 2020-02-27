const Redis = require("ioredis");

const redis = new Redis({
  port: 6379
});


redis.keys("*").then(res => {
  console.log("query result: ", res);
});

async function getData() {
  redis.setex('b', 10, '234');
  const b = await redis.get('b');
  console.log("result: ", b);
  setTimeout(async () => {
    console.log("result again: ", await redis.get('b'))
  }, 11000);
}

getData();