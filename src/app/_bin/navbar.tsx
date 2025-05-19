import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__lis">
          <Link className="navbar__links" href="/projects">
            Projects
          </Link>
        </li>
        <li className="navbar__lis">
          <Link className="navbar__links" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
