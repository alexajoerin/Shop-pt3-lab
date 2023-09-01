import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import Product from "../models/Product";
import { getProductByID } from "../services/productService";
import comingSoon from "../images/coming-soon.jpg";

const ProductDetails = () => {
  const _id = useParams().id;
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    (async () => {
      console.log(_id);
      const response: Product = await getProductByID(_id!);
      setProduct(response);
    })();
  }, [_id]);
  return (
    <div className="ProductDetails">
      <h2>{product?.name}</h2>
      <p>{product?.price}</p>
      {product?.photoURL ? (
        <img src={product.photoURL} />
      ) : (
        <img src={comingSoon} />
      )}
    </div>
  );
};

export default ProductDetails;
