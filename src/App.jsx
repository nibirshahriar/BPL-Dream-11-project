import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Homepage/Players/Players";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Subscribe from "./components/Homepage/SubscribeSection/Subscribe";
import Footer from "./components/Footer/Footer";

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
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

<Subscribe/>
<Footer/>

      {/* react toastify */}
      <ToastContainer />
    </div>
  );
}

export default App;
