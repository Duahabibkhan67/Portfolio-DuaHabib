'use client';
import Typewriter from "typewriter-effect";
export default function About(){
 return(
<section className="mt-14" >

<div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[url('/dot-pattern.png')] bg-cover bg-center bg-no-repeat py-10 px-6 md:px-20 gap-8" >
 
<div className=" mt-14">

 <h1 className="text-white text-3xl mx-9 lg:mx-0 lg:text-5xl sm:my-11 sm:flex justify-center hover:text-purple-700"><b>About Me🚀 </b></h1>
 <h1 className="text-sky-300  sm:text-5xl font-serif sm:mx-11 sm:flex sm:justify-center ">Crafting 
 <Typewriter
  options={{
    strings: [' My Tech and Business Journey!'],
    autoStart: true,
    loop: true,
  }}
/></h1>
 <p className="text-white sm:text-xl sm:mx-11 sm:my-11 text-center"> Im a passionate and results-driven Web Developer with a strong foundation in both frontend and backend technologies. I specialize in building fast, responsive, and user-friendly web applications using JavaScript, Python, HTML, CSS, Tailwind CSS, and Next.js.

With a deep understanding of modern web development practices, I focus on creating clean and efficient code, optimizing performance, and delivering seamless user experiences. Whether its developing dynamic user interfaces, building RESTful APIs, or optimizing UI with Tailwind and Next.js, I aim to bridge design with technology.

Im always exploring new tools and frameworks to stay ahead in this ever-evolving tech landscape, and I take pride in turning complex problems into intuitive digital solutions.


 </p>
</div>
</div>
</section>
 )
}