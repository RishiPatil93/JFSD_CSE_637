import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData.entries());
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          alert("Registered Successfully");
          navigate("/login");
        }}
      >
        <label htmlFor="uName">UserName </label>
        <input name="uName" type="text" required />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required />
        <br />
        <label htmlFor="pass">Password</label>
        <input type="Username" name="pass" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
