import { MCQcard } from "@/app/Components/MCQcard";

const QuestionPaper = () => {
return (
<main className="container mx-auto overflow-hidden">
    <div className="mt-16 px-3">
    <h1 className="text-6xl font-bold text-white">Question: 
    <span className="text-blue-600">#1</span></h1>
    </div>    
    <div className="w-5/6 bg-white text-black mx-auto mt-5 p-5 rounded-lg shadow-lg">
        
    <div className="relative left-3/4 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-400 before:dark:opacity-10 after:dark:from-yellow-600 after:dark:via-[#d1e271] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <MCQcard/>
      
    </div>
</main>
);
};
export default QuestionPaper;