import "./Home.css";
import Wrapper from "../../Shared/Wrapper/Wrapper";
import TeamSlider from "./Sliders/TeamSliders";
import SponsorSlider from "./Sliders/SponsorSliders";
import MainSlider from "./Sliders/mainSlider";
import "../About/about.css";

const Home = () => {
  return (
    <section>
      <MainSlider />
      <TeamSlider />/
      <SponsorSlider />
    </section>
  );
};

export default Home;
