import AOS from "aos";
import "aos/dist/aos.css";

import Gle from "./components/gle/Gle";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import maybach from "./images/maybach.webp";
import GLE from "./images/gle.jpeg";
import G63 from "./images/G64.webp";
import EClASS from "./images/Eclass.webp";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Gle
        text={
          "*Цена без учета льгот составляет 47 400 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG CLE Coupe"}
        description={""}
        price={"$47,400"}
        image={GLE}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 128 700 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes Maybach S600"}
        description={""}
        price={"$128,700"}
        image={maybach}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 104 200 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG G64"}
        description={""}
        price={"$104,200"}
        image={G63}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 96 900 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG E-CLASS Cabriolet"}
        description={""}
        price={"$96,900"}
        image={EClASS}
      />
      <Footer />
    </div>
  );
}

export default App;
