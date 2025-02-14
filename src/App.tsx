import Accreditation from "./components/Accreditation";
import CardsGroup from "./components/CardsGroup";
import Footer from "./components/Footer";
import Inspiration from "./components/Inspiration";
import International from "./components/International";
import Navbar from "./components/Navbar";
import Placement from "./components/Placement";

function App() {

  return (
    <div className="h-full w-full absolute top-0 left-0 flex flex-col">
      <Navbar />
      <CardsGroup />
      <Accreditation />
      <Placement/>
      <International />
      <Inspiration />
      <Footer />
    </div>
  )
}

export default App;
