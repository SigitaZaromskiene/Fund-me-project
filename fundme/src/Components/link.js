import { Link } from "react-router-dom";

export default function link({ to }) {
  return (
    <Link to={to} alt="link to page">
      Link
    </Link>
  );
}
