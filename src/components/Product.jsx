import React, { useEffect, useState } from "react";
import { getPricelist, getProduct, getProducts } from "../utils";

const Product = ({ id, setOpen }) => {
  const [priceList, setPriceList] = useState({});
  const [product, setProduct] = useState();

  useEffect(() => {
    getPricelist(id).then((data) => setPriceList(data));
    getProduct(id).then((data) => setProduct(data));
  }, []);

  return (
    <div className="fixed left-0 top-0 z-20 flex min-h-screen w-full flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative flex h-full w-[45%] min-w-80 flex-col items-center justify-center gap-4 rounded-xl border border-stone-500 bg-white px-8 pt-8">
        <button
          className="absolute right-2 top-2 uppercase text-black"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer transition-all hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative h-96 w-full">
          <div
            className="absolute z-10 flex h-full max-h-[32rem] w-full items-end justify-center overflow-hidden rounded-lg to-10% bg-cover bg-top bg-no-repeat p-4 before:absolute before:inset-0 before:z-[-5] before:block before:bg-gradient-to-t before:from-white before:from-20% before:to-transparent before:content-['']"
            style={{
              backgroundImage: "url(" + product?.data[0].img_url + ")",
            }}
          >
            <div className="flex w-full flex-col gap-2">
              <h1 className="font-base h-12 w-full overflow-y-clip text-ellipsis px-2 py-2 text-center text-3xl italic text-black">
                {product?.data[0].name}
              </h1>
              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {priceList.data?.map((data) => (
                  <div
                    className="flex w-fit flex-row flex-wrap items-center justify-center gap-4 rounded-lg border border-stone-500 bg-stone-200 px-2 py-[0.5px]"
                    key={data.size}
                  >
                    <p className="font-base text-lg">{data.size} cm</p>
                    <p>-</p>
                    <p className="font-base text-lg">{data.price} Ft</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
