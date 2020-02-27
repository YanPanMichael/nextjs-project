import { withRouter } from "next/router";
import Comp from "../../components/comp.jsx";

const B = ({ router }) => <Comp>B {router.query.id}</Comp>;

export default withRouter(B);
