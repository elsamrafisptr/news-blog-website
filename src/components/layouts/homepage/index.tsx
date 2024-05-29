"use client"

import Navbar from "@/components/elements/navbar";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import DaftarArtikel from "./DaftarArtikel";

const Home = () => {
  const {width, height} = useWindowSize()

  return (
    <main className="flex flex-col gap-12">
      <Navbar />
      <div className="px-48">
        <div className="w-full h-64 bg-gray-200"></div>
        <div className="text-center pt-4">dots</div>
      </div>
      <h1>{JSON.stringify({width, height})}</h1>
      <DaftarArtikel/>
    </main>
  );
};

export default Home;
