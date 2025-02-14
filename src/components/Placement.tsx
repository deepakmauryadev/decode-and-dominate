import PlacementPhoto from "../assets/Placement_Web_compressed-800x560 (1).webp";

const Placement = () => {
  return (
    <div className="m-10 bg-green-600 text-white py-16 px-10 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-black text-2xl font-bold">Placement Highlights</h2>
          <div className="w-16 border-b-2 border-white my-2"></div>

          <h3 className="text-3xl font-bold leading-snug mt-4">
            Making You Industry-Ready: Where Top Recruiters Meet Exceptional Talent
          </h3>

          <p className="mt-6">
            Our dedicated Training and Placement Cell works tirelessly to ensure that every student is well-prepared and has access to the best career opportunities.
          </p>

          <h4 className="text-xl font-bold mt-6">Career Excellence at KIIT</h4>

          <div className="mt-4 space-y-3">
            <p>✅ Partnering with leading global companies for career success.</p>
            <p>✅ Empowering your future with comprehensive career support.</p>
            <p>✅ Proven success in academics and professional achievements.</p>
            <p>✅ Efficient and hassle-free admissions and placement process.</p>
            <p>✅ Guidance from experienced mentors tailored to your goals.</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="border border-white px-6 py-2 font-semibold hover:bg-white hover:text-black transition">
              PLACEMENT HIGHLIGHTS
            </button>
            <button className="border border-white px-6 py-2 font-semibold hover:bg-white hover:text-black transition">
              KAREER SCHOOL
            </button>
          </div>
        </div>

        <div>
          <img src={PlacementPhoto} className="rounded-lg shadow-lg w-full" alt="Placement Highlights" />
        </div>
      </div>

      <button className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-800 text-white px-4 py-2 text-xs font-bold rotate-90">
        Quick Help
      </button>
    </div>
  );
};

export default Placement;
