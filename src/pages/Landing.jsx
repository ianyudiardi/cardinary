import React from "react";

export default function Landing() {
  return (
    <div className="container bg-red-500 h-screen place-self-center flex flex-col justify-between py-20">
        <div className="bg-blue-500 h-96 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Content/Illust</h1>
        </div>
        <div className="bg-yellow-500 flex justify-evenly h-32">
            <div className="flex justify-center items-center h-full w-82 bg-white">
                <h1 className="text-3xl font-bold">Button Toko Dawam</h1>
            </div>
            <div className="flex justify-center items-center h-full w-82 bg-green-500">
            <h1 className="text-3xl font-bold">Button Toko Ian</h1>
            </div>
        </div>
     
    </div>
  );
}
