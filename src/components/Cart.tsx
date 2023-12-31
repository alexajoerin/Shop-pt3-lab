import { useContext } from "react";
import "./Cart.css";
import CartContext from "./context/CartContext";
import CartRow from "./CartRow";
import { deleteCart } from "../services/CartService";

const Cart = () => {
  const { cart, deleteCartHandler } = useContext(CartContext);

  return (
    <div className="Cart">
      <button onClick={() => deleteCartHandler()}>Clear all cart items</button>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
        {cart.map((item) => (
          <CartRow cartItem={item} />
        ))}
      </table>
    </div>
  );
};

export default Cart;
