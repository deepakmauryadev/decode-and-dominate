import Online1 from "../assets/online1.jpg";
import Certificate from "../assets/kcc-Certification1.jpg";
import Boing from "../assets/boying-1.jpg";
import InternationAdm from "../assets/online1.jpg";

const cards = [
  { image: Online1, },
  { image: Certificate, },
  { image: Boing, },
  { image: InternationAdm, },
];

const CardsGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 py-6 px-40">
      {cards.map((card, index) => (
        <div key={index} className={`relative flex items-center text-white overflow-hidden shadow-lg`}>
            <img src={card.image} alt={card.image.toString()} className="w-full h-full object-cove" />
        </div>
      ))}
    </div>
  );
};

export default CardsGroup;
