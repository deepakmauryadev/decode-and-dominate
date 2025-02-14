import StudentInternational from "../ASSETS/IMG_5408-800x520.jpg";

const International = () => {
  return (
    <div className="bg-black text-white py-16 px-10 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-green-500 text-2xl font-bold">
            International Students
          </h2>
          <div className="w-16 border-b-2 border-blue-500 my-2"></div>

          <h3 className="text-3xl font-bold leading-snug mt-4">
            A global community dedicated to academic excellence, cultural
            diversity, and personal growth.
          </h3>

          <p className="mt-6 font-semibold">
            Explore our <span className="font-bold">resources</span>, connect
            with peers, and become part of the KIIT family today!
          </p>

          {/* Key Points */}
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3">
              Wide range of undergraduate, postgraduate, and doctoral programs
              tailored to meet global standards.
            </p>
            <hr className="border-green-500" />

            <p className="flex items-center gap-3">
              Collaboration with 140+ renowned global universities and
              membership in prestigious international educational bodies.
            </p>
            <hr className="border-green-500" />

            <p className="flex items-center gap-3">
              Comprehensive Support: Scholarships, student support, assistance,
              and personalized mentorship for international students.
            </p>
            <hr className="border-green-500" />
          </div>

          <div className="mt-6 flex gap-4">
            <button className="border border-white px-6 py-2 font-semibold flex items-center gap-2 hover:bg-white hover:scale-105 hover:text-black transition-all duration-300">
              🏛 INTERNATIONAL RELATIONS OFFICE
            </button>
            <button className="border border-white px-6 py-2 font-semibold flex items-center gap-2 hover:bg-white hover:scale-105 hover:text-black transition-all duration-300">
              🎓 INTERNATIONAL ADMISSIONS
            </button>
          </div>
        </div>

        <div>
          <img
            src={StudentInternational}
            className="rounded-lg shadow-lg w-full"
            alt="International Students"
          />
        </div>
      </div>

      <button className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 text-xs font-bold rotate-90">
        Quick Help
      </button>
    </div>
  );
};

export default International;
