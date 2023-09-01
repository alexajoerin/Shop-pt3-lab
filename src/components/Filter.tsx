import { useNavigate } from "react-router-dom";
import "./Filter.css";
import { FormEvent, useState } from "react";

const Filter = () => {
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState("");
  const [includes, setIncludes] = useState("");
  const [limit, setLimit] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const query = {
      ...(maxPrice ? { "max-price": maxPrice } : {}),
      ...(includes ? { includes } : {}),
      ...(limit ? { limit } : {}),
    };

    navigate(`/products?${new URLSearchParams(query)}`);
    setMaxPrice("");
    setIncludes("");
    setLimit("");
  };

  return (
    <form className="Filter" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="maxPrice">Max Price</label>
      <input
        type="number"
        name="maxPrice"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <label htmlFor="includes">Includes</label>
      <input
        type="text"
        name="includes"
        id="includes"
        value={includes}
        onChange={(e) => setIncludes(e.target.value)}
      />
      <label htmlFor="limit">Limit</label>
      <input
        type="number"
        name="limit"
        id="limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <button>Filter</button>
    </form>
  );
};

export default Filter;
