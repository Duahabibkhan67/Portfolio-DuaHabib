'use client'
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  // const sidebarVariants = {
  //   hidden: { x: "100%", opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { type: "spring", stiffness: 80, damping: 15 },
  //   },
  //   exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  // };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <div className="flex justify-between my-6 mx-9 shadow-md">
      <header className="flex justify-between mx-11 lg:bg-gradient-to-r lg:from-gray-800 border-accent sm:to-gray-900 lg:rounded-full fixed text-transparent"
 >
        <div>
          <Link href="/">
            <h1 className="text-2xl lg:text-2xl  lg:mt-4  mx-9 text-white">
              <b>DUAHABIB</b>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex ml-64 mt-3 mx-6">
          <Link href="/">
            <button className="mx-8 text-lg text-white hover:underline hover:text-purple-700 hover:scale-110">
              <b>Home</b>
            </button>
          </Link>
          <Link href="/about">
            <button className="mx-8 text-lg text-white hover:underline hover:text-purple-700 hover:scale-110">
              <b>About</b>
            </button>
          </Link>
          <Link href="/contact">
            <button className="mx-8 text-lg text-white hover:underline hover:text-purple-700 hover:scale-110">
              <b>Contact</b>
            </button>
          </Link>
         <div className="mb-3">

         
 <Link href="https://drive.google.com/file/d/1YZWxqnwZWPOyKus49Wr6odvFZwEuIH9t/view?usp=drive_link"><h1 className="sm:text-xl md:flex hidden items-center justify-center px-4 py-2 mx-4 font-semibold rounded-2xl text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-white hover:to-blue-500 hover:text-blue-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"


>DownloadCV</h1></Link>

</div>

        </div>
      </header>

    
      <button
        className="md:hidden text-3xl text-white p-2 fixed "
        onClick={() => setIsOpen(true)}
      >
        <TiThMenu />
      </button>

      {/* Animated Modal Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

     
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-black text-white shadow-lg z-50 p-6"
              variants={{
                hidden: { x: "100%", opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 80, damping: 15 },
                },
                exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
           
              <button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>

             
              <motion.div className="flex flex-col gap-6 mt-10 bg-black  ">
                {["Home", "About", "Contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                      <button
                        className="text-2xl hover:underline hover:text-green-800 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <b>{item}</b>
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
