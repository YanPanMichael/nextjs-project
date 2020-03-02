// import React from "react"
import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head"

import "../css/index.css";

const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChnageError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete"
];

function makeEvent(event) {
  return (...args) => {
    console.log(event, ...args);
  };
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event));
});

export default () => {
  function handleRouter() {
    Router.push(
      {
        pathname: "/subs/b",
        query: {
          id: 2
        }
      },
      "/subs/b/2"
    ); //刷新会出现问题，因为这种方式只是浏览器显示映射而已，浏览器内部并没有这个路径，解决方法是Koa router加入映射配置
  }

  return (
    <>
      {/* as的加入只是更改地址显示 刷新会出现问题，因为这种方式只是浏览器显示映射而已，浏览器内部并没有这个路径，解决方法是Koa router加入映射配置 */}
      {/* <Link href="/a?id=1" as="/a/1" title="jump to A">
        <Button>Jump to A page</Button>
      </Link>
      <Button onClick={handleRouter}>Jump to B page</Button> */}

      <span>index</span>
    </>
  );
};
