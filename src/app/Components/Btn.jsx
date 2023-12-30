"use client"

import {Button} from 'keep-react';

export const ButtonComponent = ({text}) => {
  return (
    <>
      <Button size="sm" type="primary" className="bg-[#ededed] border px-5 text-black hover:bg-green-200">{text || "Done"}</Button>
    </>
  );
};