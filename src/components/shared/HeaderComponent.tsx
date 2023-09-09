import { Link, useLocation } from "react-router-dom";
import ConditionalLink from "../util/ConditionalLink";

const HeaderComponent: React.FC = () => {

  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ConditionalLink path="/hcp" content="HCP" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComponent;
