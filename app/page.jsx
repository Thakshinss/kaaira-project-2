import Image from "next/image";
import Link from "next/link";
import Features from "./ui/Features";
import Explore from "./ui/Explore";
import Header from "./ui/Header";

import Legacy from "./ui/Legacy";
import About from "./(pages)/about/page";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/homee');
  // return (
  //   <main className="flex flex-col items-center justify-between min-h-screen">

  //     <div className=" place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px]  before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

  //       <Header/>
  //       <Features/>

  //       <Explore/>
  //       {/* <About/> */}
  //       <Legacy/>
  //     </div>

      
  //   </main>
  // );
}
