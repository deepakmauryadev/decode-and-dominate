import Accdn1 from "../ASSETS/accdn1.webp";
import Accdn2 from "../ASSETS/accdn2.webp";
import Accdn3 from "../ASSETS/accdn3.webp";
import Accdn4 from "../ASSETS/accdn4.webp";

const cards = [
  { image: Accdn1 },
  { image: Accdn2 },
  { image: Accdn3 },
  { image: Accdn4 },
];

export default function Accreditation() {
  return (
    <div className="flex flex-col gap-5 bg-zinc-200 px-40 py-10">
      <h1 className="text-3xl font-bold">Accreditation</h1>
      <div className="flex gap-4">
        {cards.map((card) => (
          <img
            src={card.image}
            alt="Accreditation"
            key={card.image}
            className="w-72 h-auto"
          />
        ))}
      </div>
    </div>
  );
}
