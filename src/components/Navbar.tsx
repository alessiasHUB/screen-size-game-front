import { Link } from "react-router-dom";

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <Link className="nav-text" to="/">
        Play
      </Link>
      <Link className="nav-text" to="/rules">
        Rules
      </Link>
    </nav>
  );
};

export default Navbar;
