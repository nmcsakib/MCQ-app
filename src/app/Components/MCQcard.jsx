
"use client";
import { useState } from "react";
import { Label,Radio } from "keep-react";

export const MCQcard = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="relative">
    <div className="absolute left-2/4 top-[0px] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-400 before:dark:opacity-10 after:dark:from-sky-600 after:dark:via-[#2d61fd] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

    <div className="absolute -left-10 -bottom-5 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-600 after:dark:via-[#4dfc79] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>

    <fieldset className="flex flex-col py-5 relative z-[2]">
      <legend className="text-2xl mb-5">Choose your favorite country</legend>
      <div className="grid grid-cols-2 gap-5">
         
      <div className="flex items-center gap-2 cursor-pointer bg-[#e6e3e3] hover:bg-[#fffedc8e] shadow-sm rounded-md px-3 py-3">
        <Label htmlFor="country-3">Spain</Label>
      </div>
      <div className="flex items-center gap-2 cursor-pointer bg-[#e6e3e3] hover:bg-[#e9f0d1] shadow-sm rounded-md px-3 py-3">
        <Label htmlFor="country-3">Russia</Label>
      </div>
      <div className="flex items-center gap-2 cursor-pointer bg-[#e6e3e3] hover:bg-[#e9f0d1] shadow-sm rounded-md px-3 py-3">
        <Label htmlFor="country-3">Canada</Label>
      </div>
      <div className="flex items-center gap-2 cursor-pointer bg-[#e6e3e3] hover:bg-[#e9f0d1] shadow-sm rounded-md px-3 py-3">
        <Label htmlFor="country-3">Bangladesh</Label>
      </div>
      </div>
     
    </fieldset>
    </div>
  );
}
