import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to CSE Community</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo,
        aut odit saepe dolore, aspernatur dolorem velit in culpa voluptatibus
        atque maxime ratione possimus expedita veritatis corporis laudantium cum
        quidem nemo totam quod rem ducimus sit. In alias sequi qui blanditiis
        quae perspiciatis quo dignissimos, dolor, commodi cupiditate ducimus
        repellat! Nobis aut sint doloremque. Explicabo omnis in tempora deserunt
        repudiandae optio, fugiat maiores debitis pariatur ea adipisci esse
        quasi blanditiis labore suscipit recusandae nemo est temporibus odit
        quam, dolorem et? Odit fugit nesciunt ut hic est necessitatibus alias
        amet aut cupiditate molestias et mollitia ea natus ullam sunt, deserunt
        earum.
      </p>
      <Link to={"/"}>Log out</Link>
    </>
  );
}
