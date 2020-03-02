import Router, { withRouter } from "next/router";
import Comp from "../components/comp.jsx";

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

const A = ({ router, name }) => (
  <>
    <Comp className="link">
      A {router.query.id} {name}
    </Comp>
    <style jsx>{`
      a {
        color: blue;
      }
    `}</style>
    <style jsx global>
      {`
        span {
          font-size: 1.2em;
        }
      `}
    </style>
  </>
);

A.getInitialProps = async ctx => {
  // return {
  //   name: 'Rojey'
  // }
  console.log("...............");
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "JIM"
      });
    }, 1000);
  });
  return await p;
};

export default withRouter(A);
