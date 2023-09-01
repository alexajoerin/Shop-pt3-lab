import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import Product from "../models/Product";
import { getProducts } from "../services/productService";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

const ProductList = () => {
  const [productArray, setProductArray] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const price = searchParams.get("max-price");
  const includes = searchParams.get("includes");
  const limit = searchParams.get("limit");

  useEffect(() => {
    (async () => {
      const products: Product[] = await getProducts(
        Number(price),
        includes,
        Number(limit)
      );
      //   console.log(products)
      setProductArray(products);
    })();
  }, [price, includes, limit]);
  return (
    <>
      <Filter />
      <ul className="ProductList">
        {productArray.map((item) => (
          <ProductCard product={item} key={item._id} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
