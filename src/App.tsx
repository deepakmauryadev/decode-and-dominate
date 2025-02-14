import Footer from "./components/Footer";
import Inspiration from "./components/Inspiration";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="h-full w-full absolute top-0 left-0 flex flex-col">
      <Navbar />
      <Inspiration/>
      <Footer />
    </div>
  )
}

export default App;
