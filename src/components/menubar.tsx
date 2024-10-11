import { Link } from "react-router-dom";

export default function Menubar() {
  return (
    <ul className="flex gap-4 text-sm">
      <li className="hover:opacity-60 transition-all duration-150 ease-in">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:opacity-60 transition-all duration-150 ease-in">
        <Link to="/members">Members</Link>
      </li>
      <li className="hover:opacity-60 transition-all duration-150 ease-in">
        <Link to="/about-us">About us</Link>
      </li>
    </ul>
  );
}
