import Image from "next/image";

export default function Achievement() {
  return (
    <main className="px-4 py-10 ">
 
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-auto max-w-7xl">
    
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-800 rounded-2xl shadow-lg ease-in-out transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/web logo.png" alt="weblogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">20</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
           Finished Projects
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/design.png" alt="designlogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">3</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
           Hackathon Completed
          </p>
        </div>


        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/responsivelogo.png" alt="responsivelogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">10</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
          Satisfied People
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="p-6 bg-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="flex justify-center">
            <Image className="rounded-full" height={100} width={100} src="/responsivelogo.png" alt="responsivelogo" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold text-center mt-4">60</h1>
          <p className="text-white text-center mt-2 leading-relaxed">
        Bugs Fixed
          </p>
        </div>
      </section>
    </main>
  );
}
