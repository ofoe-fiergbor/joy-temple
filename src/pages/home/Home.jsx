import CarouselComp from "../../components/carousel/CarouselComp";
import Service from "../../components/serviceSection/Service";
import Tabs from "../../components/tabs/Tabs";
import "./styles.css";

function Home() {
  return (
    <div className="homeContainer">
      <CarouselComp />
      <Service />
      <div className="homeParralexBGImg parralex"></div>
      <Tabs />
    </div>
  );
}

export default Home;
