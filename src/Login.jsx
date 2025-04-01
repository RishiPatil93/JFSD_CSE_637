import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData.entries());
          console.log(data);
          const user = JSON.parse(localStorage.getItem("user"));
          if (user.uName === data.uName && user.pass === data.pass) {
            alert("Login Successfully");
            navigate("/home");
          } else {
            alert("Invalid Credentials");
          }
        }}
      >
        <label htmlFor="uName">UserName </label>
        <input name="uName" type="text" required />
        <br />
        <label htmlFor="pass">Password</label>
        <input type="Username" name="pass" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
