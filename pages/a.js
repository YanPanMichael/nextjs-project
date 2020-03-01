import Router, { withRouter } from "next/router";
import Comp from "../components/comp.jsx";

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChnageError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(event) {
  return (...args) => {
    console.log(event, ...args)
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

const A = ({ router }) => <Comp>A {router.query.id}</Comp>;

export default withRouter(A);
