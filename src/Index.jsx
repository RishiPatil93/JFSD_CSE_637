import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Welcome To CSE Community</h1>
      <Link to={"/Login"}>Login</Link> | <Link to={"/Register"}>Register</Link>
      <br />
    </>
  );
}
