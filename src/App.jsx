import { Suspense, useState } from "react";
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
  const [coin, setCoin] = useState(50000);

  return (
    <div className="w-10/12 mx-auto">
      <Navbar coin={coin} />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>
    </div>
  );
}

export default App;
