
"use client";
import { Dropdown,TextInput } from "keep-react";
import { CaretRight, SquaresFour } from "phosphor-react";

export const CategoryBtn = ({title}) => {
  return (
    <Dropdown

      label={title || "title"}
      type="primary"
      size="sm"
      dismissOnClick={true}
      className="bg-[#ededed] border w-44 text-black hover:bg-green-200"

    >
      <div className="px-5 pt-3 pb-2">
        <TextInput id="#id-8yj95h" placeholder="Search" color="gray" />
      </div>
      <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
        Dashboard
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
   
    </Dropdown>
  );
}
