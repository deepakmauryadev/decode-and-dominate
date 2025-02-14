const cards = [
  {
    title: "ONLINE DEGREE PROGRAMS",
    description: "Your gateway to limitless possibilities",
    buttonText: "Apply Now",
    bgColor: "bg-blue-900",
    image: "/online-degree.jpg"
  },
  {
    title: "KIIT Certification Courses",
    description: "High Impact Online Courses in collaboration with Harvard Business School Online",
    buttonText: "Apply Now",
    bgColor: "bg-purple-800",
    image: "/kiit-certification.jpg"
  },
  {
    title: "BUILD Programme by BOEING",
    description: "Boeing University Innovation Leadership Programme in partnership with KIIT, TBI.",
    buttonText: "Apply Now",
    bgColor: "bg-green-700",
    image: "/boeing-programme.jpg"
  },
  {
    title: "International Admissions",
    description: "Are you an international student considering your future? Find something to suit your career ambitions.",
    buttonText: "Apply Now",
    bgColor: "bg-yellow-600",
    image: "/international-admissions.jpg"
  }
];

const CardsGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {cards.map((card, index) => (
        <div key={index} className={`relative flex items-center ${card.bgColor} text-white p-6 rounded-lg overflow-hidden shadow-lg`}>
          <div className="absolute inset-0">
            <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2 text-sm">{card.description}</p>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsGroup;
