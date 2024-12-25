import Dropdown from "./components/DropDown";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Sponser from "./components/Sponser";
import Landing from "./components/landing";
function App() {
  return (
    <main className="w-full">
      <div className="bg-green-100 flex justify-center items-center ">
        <p className=" text-center text-lg font-semibold pb-4 pt-6 mr-4 animate-bounce">
          🔥Free Shipping on all U.S. order $50+
        </p>
        <p>
          <button className="bg-white text-black font-semibold rounded-md py-2 px-4">
            Shop Now
          </button>
        </p>
      </div>
      <Header />
      <HeroSection />
      <Sponser />
      <Landing />
    </main>
  );
}

export default App;
