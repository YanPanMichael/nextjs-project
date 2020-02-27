import { withRouter } from "next/router";
import Comp from "../components/comp.jsx";

const A = ({ router }) => <Comp>A {router.query.id}</Comp>;

export default withRouter(A);
