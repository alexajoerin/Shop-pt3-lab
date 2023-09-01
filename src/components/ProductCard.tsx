import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../images/coming-soon.jpg";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="ProductCard">
      <Link to={`/products/${encodeURIComponent(product._id!)}`}>
        {" "}
        <p>{product.name}</p>
      </Link>
      <p>{product.price}</p>
      {/* <img src={comingSoon} alt="" /> */}
      {product.photoURL ? (
        <img src={product.photoURL} />
      ) : (
        <img src={comingSoon} />
      )}
    </li>
  );
};

export default ProductCard;
