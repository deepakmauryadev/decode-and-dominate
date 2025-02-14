import AchyutaSamanta from "../assets/Achyuta-Samanta-KIIT-University-1200x661.jpg";

const Inspiration = () => {
  return (
    <>
      <div className="px-10 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          Our Inspiration
          <div className="w-14 border-b-4 border-green-500 mt-2"></div>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 relative">
            <img
              src={AchyutaSamanta}
              className="w-full h-[350px] object-cover rounded-lg shadow-lg"
              alt="Prof. Achyuta Samanta"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-opacity-80 px-4 py-2 text-center text-sm rounded-md">
              Our Visionary Founder <br />{" "}
              <span className="font-bold">Prof. Achyuta Samanta</span>
            </p>
          </div>

          <div className="flex-1">
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-bold">“My Loveable KIITians”</span> is a
              phrase that every graduate from KIIT University dearly remembers.
              Dr. Achyuta Samanta is an educationalist, philanthropist,
              humanitarian, socio-entrepreneur, policymaker, and writer. He is
              the founder of{" "}
              <span className="font-bold">
                Kalinga Institute of Industrial Technology (KIIT)
              </span>{" "}
              and
              <span className="font-bold">
                {" "}
                Kalinga Institute of Social Sciences (KISS)
              </span>
              , both educational institutions of global repute.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Besides education, Dr. Samanta has contributed to Women
              Empowerment, Rural Development, Tribal Upliftment, Art, Culture,
              Literature, Media, and Social Work. Know more about this
              modern-day philanthropist, a man in a white shirt, denim, and
              chappals.
            </p>

            <button className="mt-6 px-6 py-2 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition duration-300">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="bg-yellow-200 text-center py-4">
          <p className="text-gray-800 font-medium">
            KIIT has only one permanent campus in Bhubaneswar, Odisha. It has no
            other campus / off campus anywhere else in the country and the
            globe.
          </p>
        </div>
        <div className="grid grid-cols-4">
          {["Know KIIT", "Academics", "Campus Life", "Know Founder"].map(
            (item, index) => (
              <button
                key={index}
                className="bg-teal-700 text-white text-lg font-semibold py-4 hover:bg-teal-800 transition"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Inspiration;
