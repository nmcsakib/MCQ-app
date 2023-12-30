import { ButtonComponent } from "@/app/Components/Btn";
import { CategoryBtn } from "@/app/Components/Category";

export default function Home() {
  return (
    <main className="bg-slate-500/50 w-full h-screen container mx-auto grid items-center">
     <div className="w-5/6 -mt-20 h-32 mx-auto rounded-lg bg-white shadow-xl ">
      <div className="bg-blue-950/80 pb-2 pt-4 rounded-t-lg"><h2 className="text-center text-4xl text-white ">Test yourself</h2></div>
      <div className=" px-5 py-3 flex justify-between items-center">
        <CategoryBtn title="Choose Category"/>
        <CategoryBtn title="Level"/>
        <CategoryBtn title="Question amount"/>
        <ButtonComponent text="Go"/>
      </div>
     </div>
    </main>
  )
}
