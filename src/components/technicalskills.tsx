export default function TechnicalSkills() {
 const skills = [
   { name: "JavaScript", value: 85 },
   { name: "TypeScript", value: 80 },
   { name: "React.js", value: 85 },
   { name: "Next.js", value: 90 },
 ];

 return (
   <section className="w-full px-4 py-10 bg-black text-white">
     <div className="max-w-3xl mx-auto">
       <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-sky-300 via-pink-300 to-pink-400 bg-clip-text text-transparent">
         Technical Skills
       </h2>

       <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>

       <div className="space-y-6">
         {skills.map((skill) => (
           <div key={skill.name}>
             <div className="flex justify-between mb-1">
               <span className="text-base font-medium">{skill.name}</span>
               <span className="text-sm font-semibold">{skill.value}%</span>
             </div>
             <div className="w-full bg-gray-800 rounded-full h-3">
               <div
                 className="h-3 rounded-full bg-gradient-to-r from-sky-500 via-purple-300 to-pink-400"
                 style={{ width: `${skill.value}%` }}
               ></div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
}
