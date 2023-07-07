
import './Home.css';
import TeamSlider from './Sliders/TeamSliders';
import SponsorSlider from './Sliders/SponsorSliders';
import MainSlider from './Sliders/mainSlider';
import HomeText from './HomeText/HomeText';


const Home = () => {
  return (
    <div className='home-container'>
                <MainSlider/>
                <HomeText/>
                <TeamSlider/>
                <SponsorSlider/>
    </div>

  );
};

export default Home;
