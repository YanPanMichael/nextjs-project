// import React from "react"
import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";

import "../css/index.css";

export default () => {
  function handleRouter() {
    Router.push("/subs/b");
  }

  return (
    <>
      <Link href="/a" title="jump to A">
        <Button>Jump to A page</Button>
      </Link>
      <Button onClick={handleRouter}>Jump to B page</Button>
    </>
  );
};
