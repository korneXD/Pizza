import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-[60%] flex-col items-center justify-center gap-4 rounded-xl border border-stone-500 bg-green-600 py-12">
      <div className="relative flex flex-row items-center justify-center">
        <h1 className="font-base z-10 text-4xl text-white">Elérhetőség</h1>
        <img
          src="basil.png"
          alt="Basil"
          className="absolute left-1 -ml-16 size-28 rotate-[-50deg]"
        />
      </div>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-start justify-center px-2">
          <p className="font-base text-xl text-white">+ 06 30 911 1038</p>
          <p className="font-base text-xl text-white">
            6000 Kecskemét Bethlen krt. 63
          </p>
          <p className="font-base text-xl text-white">metropolitan@pizza.hu</p>
        </div>
        <div className="flex flex-col items-start justify-center px-2">
          <p className="font-base text-xl text-white">
            Hétfő - Péntek: 9:00 - 17:00
          </p>
          <p className="font-base text-xl text-white">Szombat: 9:00 - 20:00</p>
          <p className="font-base text-xl text-white">
            Vasárnap: 11:00 - 14:00
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-4">
        <h1 className="font-base text-xl text-white">
          Készítette:{" "}
          <span className="italic text-stone-100">Halmosi Kornél</span>
        </h1>
        <a href="">
          <img src="github.svg" alt="#" />
        </a>
      </div>
    </div>
  );
};
