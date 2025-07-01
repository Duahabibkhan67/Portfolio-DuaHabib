import Image from "next/image";

export default function Services() {
  return (
    <main className="px-4 py-10 ">
      <h1 className="flex justify-center items-center text-6xl lg:text-7xl font-serif">
        <p className="text-purple-700 font-bold">S</p>
        <span className="text-white font-bold">ervices</span>
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto max-w-7xl">
        {/* Web Development */}
        <div
    
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/web logo.png" alt="weblogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">Web Development</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
            Expert web development service to bring your ideas to life. From conceptualization to deployment,
            I craft robust, scalable, and secure web applications that meet your business needs.
            With proficiency in modern technologies and frameworks, I deliver high-quality solutions that drive results.
          </p>
      

          </div>

        {/* Web Design */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/design.png" alt="designlogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">Web Design</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
            Creative web designing solutions to captivate your audience.
            I design visually stunning, user-friendly, and engaging websites that reflect your brand identity.
          </p>
        </div>

        {/* Responsive Web Design */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/responsivelogo.png" alt="responsivelogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">Responsive Web Design</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
            Responsive web design services to ensure a seamless user experience across devices.
            I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size,
            ensuring optimal viewing and interaction.
          </p>
        </div>
      </section>
    </main>
  );
}
