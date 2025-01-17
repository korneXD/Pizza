import React from "react";

export const Banner = () => {
  return (
    <div className="flex w-[60%] items-center justify-center rounded-xl border border-stone-500 bg-green-600 py-12">
      <h1 className="font-base z-10 text-4xl text-white">
        Metropolitan Pizzéria
      </h1>
      <img
        src="basil.png"
        alt="Basil"
        className="-ml-16 size-28 rotate-[70deg]"
      />
    </div>
  );
};
