import Card from "../../Shared/Wrapper/card";
import "./about.css";
import Product from "./product";
import History from "./history";
import Login from "../admin/login";
const About = () => {
  return (
    <div>

   
      
      <div className="img">
        <div className=" d-flex justify-content-center align-items-center overlay">
          <h1 className="text-light">About Us</h1>
        </div>
      </div>

      <div className="containerr">
        <div className="h my-5 text-center py-5">
          <h1>
            <span className="b-bottom my-5">Our Products</span>
          </h1>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Product
              src={
                "https://smartcitylab.neduet.edu.pk/images/workshops/ADMS.png"
              }
              name={"ADVANCED DRIVER MONITORING SYSTEM (ADMS)"}
              date={"20-feb-2023"}
              desc={` ADMS is a state-of-the-art technology designed to monitor
                drivers behavior and detect potential safety issues. This system
                uses dashboard camera and advanced algorithms to analyze driver
                behavior in real-time and alert the drivers or other relevant
                parties such as fleet managers in case of any potentially
                dangerous activity. Fleet managers can use ADMS to monitor their
                drivers and ensure they are operating vehicles safely and
                responsibly. Insurance companies can also benefit from ADMS by
                using the data collected to adjust insurance rates based on
                driver behavior.`}
            />
          </div>
          <div className="col-md-4">
            <Product
              src={
                "https://smartcitylab.neduet.edu.pk/images/workshops/ADMS.png"
              }
              name={"ADVANCED DRIVER MONITORING SYSTEM (ADMS)"}
              date={"20-feb-2023"}
              desc={` ADMS is a state-of-the-art technology designed to monitor
                drivers behavior and detect potential safety issues. This system
                uses dashboard camera and advanced algorithms to analyze driver
                behavior in real-time and alert the drivers or other relevant
                parties such as fleet managers in case of any potentially
                dangerous activity. Fleet managers can use ADMS to monitor their
                drivers and ensure they are operating vehicles safely and
                responsibly. Insurance companies can also benefit from ADMS by
                using the data collected to adjust insurance rates based on
                driver behavior.`}
            />
          </div>
          <div className="col-md-4">
            <Product
              src={
                "https://smartcitylab.neduet.edu.pk/images/workshops/ADMS.png"
              }
              name={"ADVANCED DRIVER MONITORING SYSTEM (ADMS)"}
              date={"20-feb-2023"}
              desc={` ADMS is a state-of-the-art technology designed to monitor
                drivers behavior and detect potential safety issues. This system
                uses dashboard camera and advanced algorithms to analyze driver
                behavior in real-time and alert the drivers or other relevant
                parties such as fleet managers in case of any potentially
                dangerous activity. Fleet managers can use ADMS to monitor their
                drivers and ensure they are operating vehicles safely and
                responsibly. Insurance companies can also benefit from ADMS by
                using the data collected to adjust insurance rates based on
                driver behavior.`}
            />
          </div>
          <div className="col-md-4">
            <Product
              src={
                "https://smartcitylab.neduet.edu.pk/images/workshops/ADMS.png"
              }
              name={"ADVANCED DRIVER MONITORING SYSTEM (ADMS)"}
              date={"20-feb-2023"}
              desc={` ADMS is a state-of-the-art technology designed to monitor
                drivers behavior and detect potential safety issues. This system
                uses dashboard camera and advanced algorithms to analyze driver
                behavior in real-time and alert the drivers or other relevant
                parties such as fleet managers in case of any potentially
                dangerous activity. Fleet managers can use ADMS to monitor their
                drivers and ensure they are operating vehicles safely and
                responsibly. Insurance companies can also benefit from ADMS by
                using the data collected to adjust insurance rates based on
                driver behavior.`}
            />
          </div>
        </div>
      </div>
      <div className="bg pb-5">
        <div className="containerr">
          <div className="my-5 py-5">
            <h1 className="text-center my-5">
              <span className="b-bottom">On Going Projects</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
            <div className="col-md-4 my-3">
              <Card
                src={`https://smartcitylab.neduet.edu.pk/images/projects/smart-irrigation-system.jpg`}
                role={`Smart Irrigation System`}
                desc={`Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. The engineers at the Smart City Lab has developed the IoT devices that will improve the process of Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is used for agricultural activities. Majority of the water is wasted due to over watering caused by inefficiencies in traditional irrigation methods and systems.`}
                name={``}
                prof={``}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="conntainerr">
        <div className="my-5 py-5">
          <h1 className="text-center my-5">
            <span className="b-bottom">History</span>
          </h1>
        </div>
        <div className="row rounded mx-5 shadow-lg my-5">
          <History
            name={"Armez"}
            desc={`ARMEZ was born out of the scenario that nowadays, our young generation spends most of its time in indoor games and activities. This daily routine inevitably leads to underdeveloped muscles, a lack of communication skills, and an inability to handle real-time decisions or situations. Our PI, Dr. Khurram, had noticed this prevailing behavior in our youth and wanted to change the narrative. He and his team developed “ARMEZ”, an indigenous real-life combat shooting game. The game was developed for recreational purposes as well as self-defense training of civilians or trainee soldiers. ARMEZ quickly received immense recognition and support from both the public and private sectors. Since its launch in 2017, ARMEZ has featured in many satellite TV programs; it was also successfully installed in Arena, Karachi, and Adventure Park, Jhelum.

We believe that with ARMEZ, we can keep our next generation tech-savvy and physically diligent.`}
            src={`https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?w=1380&t=st=1688644262~exp=1688644862~hmac=e94148902a22f5768ae5d11af87617fb61b03075c6e924426478a761e905d80d`}
          />
        </div>
        <div className="row rounded shadow-lg mx-5 my-5">
          <History
            name={"AQUA AGRO"}
            desc={`Journey of Aqua Agro is very inspiring and thought-provoking as well. Pakistan is an agricultural country generating 26% of its GDP from agriculture. Pakistan also has the 5th largest population in the world. These two facts were always in the mind of Dr. Khurram; he wanted to contribute to the economic growth and preservation of natural resources in Pakistan. He and the team started working day and night on the idea of “smart agriculture'' and slowly, prototype after prototype, developed the indigenous device able to predict when and how much water a crop requires. Aqua Agro started its journey deployed in small gardens and progressed onto farms and orchards. The final Aqua Agro device was deployed on a Lemon Orchard in Mirpurkhas, and the harvest proved astounding results. The Lemon yield was 30% more than the usual yield while using 50% of regular irrigation water. These results became the foundation for more devices to be developed in many farms in Sindh and Balochistan; they also resulted in farmer training and workshops. Aqua Agro was also covered and highlighted in many satellite TV programs.`}
            src={`https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?w=996&t=st=1688647104~exp=1688647704~hmac=5c803ba16235438fb1d9b60c35f4db5a692c80829504ed5111af07aa48899fa8`}
          />
        </div>
        <div className="row rounded mx-5 shadow-lg my-5">
          <History
            name={"WEED BOT"}
            desc={`The story of our contributions towards agriculture does not stop at Aqua Agro; we have more to share! While searching for more problems and solutions in the agriculture sector, Dr. Khurram noticed the atrocious human labor involved in taking out weeds sprouting in fields that absorb water and other nutrients farmers provide for the crops. The team then started research work on a robot that could efficiently identify different weeds and remove them in time before they begin to damage the crops. Since the project required funding, the team searched for grants and partnerships. Finally, the team won substantial sponsorship and collaboration with the German Research Center of Artificial Intelligence. The weed bot is under development and expected to launch at the closing of 2022.`}
            src={`https://img.freepik.com/premium-vector/people-standing-podium-rank-first-three-places-jumps-air-with-trophy-cup_503038-712.jpg?w=1380`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
