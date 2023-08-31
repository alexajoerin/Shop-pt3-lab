import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import Product from "../models/Product";
import { getProducts } from "../services/productService";

const ProductList = () => {
  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const products: Product[] = await getProducts();
      //   console.log(products)
      setProductArray(products);
    })();
  }, []);
  return (
    <ul className="ProductList">
      {productArray.map((item) => (
        <ProductCard product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
