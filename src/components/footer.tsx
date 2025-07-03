'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {  FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 text-white py-10  px-5 lg:px-20"
    >
      <div  className="grid sm:grid-cols-3 sm:gap-8">
   
        <div>
          <h1 className="text-purple-500 text-3xl font-bold">Dua Habib</h1>
          <p className="text-gray-400 mt-4">
            Website developer. Any type of websites. UI/UX design services provided!
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-purple-500 text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-400 mt-4"><b>Email:</b> duah10670@gmail.com</p>
          <p className="text-gray-400 mt-2"><b>Location:</b> Karachi, Pakistan</p>
          <div className="flex gap-4 mt-4">
    
            <Link href="https://www.linkedin.com/in/dua-habib-497557301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-xl hover:text-green-500 cursor-pointer transition" /></Link>
           <Link href="https://github.com/Duahabib67">
           <FaGithub className="text-xl hover:text-purple-500 cursor-pointer transition" />
           </Link> 
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-purple-500 text-2xl font-bold">Services</h2>
          <ul className="text-gray-400 mt-4 space-y-2">
            <li className="hover:text-purple-500 transition">Website Design</li>
            <li className="hover:text-purple-500 transition">UI/UX Design</li>
            <li className="hover:text-purple-500 transition">Global Website</li>
            <li className="hover:text-purple-500 transition">Multi-page Website</li>
            <li className="hover:text-purple-500 transition">Development</li>
            <li className="hover:text-purple-500 transition">SEO</li>
          </ul>
        </div>
      </div>
      
      <p  className="text-center text-gray-500 mt-10">&copy; {new Date().getFullYear()} Dua Habib. All rights reserved.</p>
    </motion.footer>
  );
}
