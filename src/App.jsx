import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Homepage/Players/Players";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Players playerPromise={playerPromise} />
      </Suspense>
    </div>
  );
}

export default App;
