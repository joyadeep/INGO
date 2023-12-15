

const About = () => {
  return (
    <>
    <div className="w-full h-screen bg-cover bg-no-repeat bg-about flex flex-col gap-5 items-center justify-center text-white pb-10">
      <h1 className="font-black text-6xl capitalize">Help the children</h1>
      <p className="w-1/2 text-lg text-center">We do whatever it takes to make sure children don't just survive but thrive. Helper believes that every child should be able to make on their world and help build a better future.</p>
    </div>

    <section className="mt-10 px-28 pb-10 flex flex-col gap-10">
      <div className="flex odd:flex-row even:flex-row-reverse justify-between items-center gap-x-10 ">
        <div className="w-full">
        <img src={"https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="missions" className=" w-[300px] h-[300px] object-cover shadow-2xl shadow-slate-500 rounded-md" />
        </div>
        <div className="w-full">
          <h3 className="text-4xl font-extrabold">Our Mission</h3>
          <p>Empowering global communities by delivering sustainable solutions for clean water access and sanitation, fostering health, resilience, and prosperity worldwide.</p>
        </div>
      </div>

      <div className="flex odd:flex-row even:flex-row-reverse justify-between items-center gap-x-10 ">
        <div className="w-full">
        <img src={"https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="missions" className=" w-[300px] h-[300px] object-cover shadow-2xl shadow-slate-500 rounded-md" />
        </div>
        <div className="w-full">
          <h3 className="text-4xl font-extrabold">Our Vision</h3>
          <p>Envisioning a world where every child flourishes, accessing quality education, healthcare, and protection, fostering their well-being and unlocking their full potential for a better tomorrow.</p>
        </div>
      </div>

      <div className="flex odd:flex-row even:flex-row-reverse justify-between items-center gap-x-10 ">
        <div className="w-full">
        <img src={"https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="missions" className=" w-[300px] h-[300px] object-cover shadow-2xl shadow-slate-500 rounded-md" />
        </div>
        <div className="w-full">
          <h3 className="text-4xl font-extrabold">Our Plan</h3>
          <p>Empowering children globally through education, healthcare, protection, and advocacy, fostering their well-being and ensuring equitable opportunities for a brighter, inclusive future.</p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About