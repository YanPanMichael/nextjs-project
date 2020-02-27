// import React from "react"
import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";

import "../css/index.css";

export default () => {
  function handleRouter() {
    Router.push({
      pathname: '/subs/b',
      query: {
        id: 2
      }
    }, '/subs/b/2');
  }

  return (
    <>
      <Link href="/a?id=1" as="/a/1" title="jump to A">
        <Button>Jump to A page</Button>
      </Link>
      <Button onClick={handleRouter}>Jump to B page</Button>
    </>
  );
};
