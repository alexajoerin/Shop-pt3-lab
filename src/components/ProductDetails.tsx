import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
import Product from "../models/Product";
import { getProductByID } from "../services/productService";
import comingSoon from "../images/coming-soon.jpg";
import CartContext from "./context/CartContext";

const ProductDetails = () => {
  const { addToCartHandler } = useContext(CartContext);
  const id = useParams().id;
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    (async () => {
      //   console.log(id);
      const response: Product = await getProductByID(id!);
      setProduct(response);
    })();

    // same thing using the then operator:
    // getProduct(id!).then((response: any) => {
    //   setProduct(response);
    // });
  }, [id]);
  return (
    <div className="ProductDetails">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {product.photoURL ? (
            <img src={product.photoURL} />
          ) : (
            <img src={comingSoon} />
          )}
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProductDetails;
