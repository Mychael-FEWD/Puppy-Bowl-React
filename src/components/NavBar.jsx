import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1 id="header">Puppy Bowl</h1>
      <nav id="nav">
        <Link className="link" to="/">
          <ion-icon name="home-outline"></ion-icon>
          <p className="link-text">Home</p>
        </Link>
      </nav>
    </header>
  );
}
