import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import CartContext from "./context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartTotal: number = cart.reduce((ac, cv) => ac + cv.quantity, 0);
  return (
    <div className="Header">
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <div>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartTotal})</Link>
      </div>
    </div>
  );
};

export default Header;
