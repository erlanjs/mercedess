import Hero from "../../components/hero/Hero";
import Gle from "../../components/gle/Gle";
import Footer from "../../components/footer/Footer";
import maybach from "../../images/maybach.webp";
import GLE from "../../images/gle.jpeg";
import G63 from "../../images/G64.webp";
import EClASS from "../../images/Eclass.webp";

function Home() {
  return (
    <div className="App">
      <Hero />
      <Gle
        text={
          "*Цена без учета льгот составляет 47 400 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG CLE Coupe"}
        description={""}
        price={"$47,400"}
        link="/gle-amg"
        image={GLE}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 128 700 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes Maybach S600"}
        description={""}
        price={"$128,700"}
        link="/maybach"
        image={maybach}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 104 200 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG G63"}
        description={""}
        price={"$104,200"}
        link="/g64-amg"
        image={G63}
      />
      <Gle
        text={
          "*Цена без учета льгот составляет 96 900 долларов КР, без учета налогов и сборов. Возможны изменения."
        }
        title={"Mercedes-AMG E-CLASS Cabriolet"}
        description={""}
        price={"$96,900"}
        link="/e-class-cabriolet"
        image={EClASS}
      />
      <Footer />
    </div>
  );
}

export default Home;
