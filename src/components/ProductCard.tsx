import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../images/coming-soon.jpg";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="ProductCard">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={comingSoon} alt="" />
    </li>
  );
};

export default ProductCard;
