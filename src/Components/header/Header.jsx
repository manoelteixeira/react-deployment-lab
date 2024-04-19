// src/Components/header/Header.jsx
import "./header.scss";

export default function Header() {
  return (
    <header>
      <h1>TekNews</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Process</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
