import React from "react";
import { useState } from "react";
import Product from "./Product";

const SingleProduct = ({ id, name, img }) => {
  const [open, setOpen] = useState(false);
  const handleOrder = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-stone-500 bg-stone-200 p-4">
        <h1 className="font-base w-fit text-center text-xl italic text-black">
          {name}
        </h1>
        <img
          src={img}
          alt={name}
          className="size-full rounded-xl border border-stone-500"
        />
        <button
          className="font-base rounded-lg border border-stone-500 bg-stone-100 px-2 py-1 italic text-green-500 transition-all hover:bg-stone-300 hover:text-black"
          onClick={handleOrder}
        >
          Megtekintem
        </button>
      </div>
      {open && <Product id={id} setOpen={setOpen} />}
    </>
  );
};

export default SingleProduct;
