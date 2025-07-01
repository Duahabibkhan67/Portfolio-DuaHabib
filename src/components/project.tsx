'use client';
import Link from "next/link";
import Image from "next/image";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Project() {
  return (
    <div>
      <div className="sm:mx-3 sm:my-9">
        <p className="text-pink-300 mt-16 text-3xl lg:text-5xl sm:my-11 font-serif sm:flex justify-center">
          <b>Projects🚀</b>
        </p>
      </div>

      <section className="sm:grid grid-cols-3 sm:mx-4">
        {/* project1 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl ">
         
            <Image
              className=" cursor-pointer "
              src="/hamdard.png"
              alt="Hamdard Logo"
              width={500}
              height={300}
            />
         
          <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Multi-Page-Website</h1>
          <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
          
         
          <Link href="https://hamdard-website.vercel.app/"><button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button> </Link>
     
        </div>

      

         {/* project2 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl mx-2 ">
            <Image
              className=" cursor-pointer "
              height={200}
              width={400}
              src="/food.png"
              alt="Food Website"
            />
      

          <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Multi-Page-Website</h1>
        <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
          <Link href="https://tailwind-food-website-gray.vercel.app/">
           <button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button> 
           </Link> 
        </div>
       
       {/* project3 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl mx-2 ">
         
            <Image
              className=" cursor-pointer "
              height={200}
              width={400}
              src="/project4.png"
              alt="Project 4"
            />
             <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Python Project</h1>
        <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
             <Link href="https://growth-mindset-app-duahabib.streamlit.app/">
             <button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button> 
          </Link>
        </div>

         {/* project4 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl mx-2 my-6 ">
      
            <Image
              className=" cursor-pointer"
              height={200}
              width={400}
              src="/project5.png"
              alt="Project 5"
            />
              <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Single-Page-Website</h1>
        <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
               <Link href="https://charles-website-nine.vercel.app/">
               <button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button> 
          </Link>
        </div>

         {/* project5 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl mx-2 my-6 ">
         
            <Image
              className=" cursor-pointer"
              height={200}
              width={400}
              src="/project6.png"
              alt="Project 6"
            />
             <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Unit-Converter-Py</h1>
        <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
          <Link href="https://unit-converterpython-duahabib.streamlit.app/">
          <button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button>
          </Link>
        </div>

         {/* project7 */}
        <div data-aos="zoom-in-up" className="border border-gray-700 rounded-3xl mx-2 my-6 ">
            <Image
              className="cursor-pointer "
              height={200}
              width={400}
              src="/project7.png"
              alt="Project 6"
            />
              <h1 className="text-2xl mx-6 p-3 font-semibold text-white">Unit-Converter-Py</h1>
        <div className="px-8">
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Next.js</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">Typecript</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">HTML</button>
          <button className="border rounded-2xl p-2 mx-2 text-xs border-gray-700 hover:bg-gray-800 hover:scale-110 text-white">TailwindCSS </button>
          </div>
              <Link href="https://passwordstrengthmeter-duahabib.streamlit.app/">
              <button className="text-white p-3 flex justify-center" >Live Demo <p className="text-green-400 text-lg p-1"><LuSquareArrowOutUpRight /></p></button>
          </Link>
        </div>
      </section>
    </div>
  );
}
