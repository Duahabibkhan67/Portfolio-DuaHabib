'use client';

import About from "@/components/about";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Service from "@/components/service";


import Achievement from "@/components/achieve";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Education from "@/components/eduction";
import TechnicalSkills from "@/components/technicalskills";

export default function Home(){
 useEffect(()=>{
  AOS.init({
   easing:"ease-out-back",
   duration:1200,
   delay:200,
   mirror:true,
   anchorPlacement:"bottom-bottom",
   offset:160,
  })
  AOS.refresh();
 } ,[]);
 return(
<main className="bg-black scroll-smooth">
<div className="bg-black">
< Hero />

<About />
< Education />
< TechnicalSkills />
< Project />
< Service />
< Achievement />



</div>
</main>

 

 );
}
