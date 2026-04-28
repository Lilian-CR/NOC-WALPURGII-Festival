import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("pl"); // "pl" | "en"

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <Footer />
    </>
  );
}

export default App;