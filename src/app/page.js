
"use client"

import { useRef } from "react";
import Image from "next/image";
import Header from "./_components/Header";
import Herosection from "./_components/Herosection";
import Links from "./_components/Links";
import MyWork from "./_components/MyWork";
import Footer from "./_components/Footer";
import About from "./_components/About";
import MyCv from "./_components/MyCv";
import Exp from "./_components/Exp";

export default function Home() {
  const aboutRef = useRef(null);
  const myWorkRef = useRef(null);
  const myCvRef = useRef(null);
  const expRef = useRef(null);

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-30 xl:px-60 flex flex-col gap-5 pt-5">
      <Header aboutRef={aboutRef} myWorkRef={myWorkRef} myCvRef={myCvRef} expRef={expRef} />
      <Herosection myCvRef={myCvRef}/>
      <div ref={myWorkRef}><MyWork /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={myCvRef}><MyCv /></div>
      <div ref={expRef}><Exp /></div>
      <Footer aboutRef={aboutRef} myWorkRef={myWorkRef} myCvRef={myCvRef} expRef={expRef} />
    </div>
  );
}
