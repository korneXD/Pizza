import React, { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../utils.js";
import SingleProduct from "./SingleProduct.jsx";

const Products = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="flex w-[60%] items-center justify-center rounded-xl border border-stone-500 bg-stone-100 py-4">
        <h1 className="font-base text-3xl text-black">Pizza Választékunk</h1>
      </div>
      <div className="flex w-[60%] flex-row flex-wrap items-center justify-center gap-4 rounded-xl border border-stone-500 bg-stone-100 py-4">
        {data.data?.map((data) => (
          <SingleProduct
            key={data.id}
            id={data.id}
            name={data.name}
            img={data.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
