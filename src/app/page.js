import { ButtonComponent } from "@/app/Components/Btn";
import { CategoryBtn } from "@/app/Components/Category";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen container mx-auto grid items-center">
     <div className="w-5/6 -mt-20 pb-3 mx-auto rounded-lg bg-white shadow-xl ">
      <div className="bg-blue-950/80 pb-2 pt-4 rounded-t-lg"><h2 className="text-center text-4xl text-white ">Test yourself</h2></div>
      <div className=" px-5 py-3 flex justify-between items-center">
        <CategoryBtn title="Choose Category"/>
        <CategoryBtn title="Level"/>
        <CategoryBtn title="Question amount"/>
        <Link href="/question-paper">
        <ButtonComponent text="Go"/>
        </Link>
      </div>
     </div>
    </main>
  )
}
