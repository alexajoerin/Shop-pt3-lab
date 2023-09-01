import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Header;
