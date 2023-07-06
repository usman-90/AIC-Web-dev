import Card from "./Components/Shared/Wrapper/card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Card
        src={
          "https://smartcitylab.neduet.edu.pk/images/team/dr.khurram-new.jpg"
        }
        name={"Khurram Manzoor"}
        role={"PRINCIPAL INVESTIGATOR"}
        prof={"PROFESSOR CIS DEPARTMENT"}
        desc={
          "Dr. Muhammad Khurram, Principal Investigator at Smart City Lab also serving as Professor at Dept. of Computer and Information Systems Engineering, NED University and Director of Research Center for AI. His main interest in computer vision, AI, IOT projects."
        }
      />
    </>
  );
}

export default App;
