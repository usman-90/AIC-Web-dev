import Card from "../../Shared/Card/card";
import "./about.css";
import Product from "./product";
import History from "./history";
import { products, history, projects } from "../../../Data/data";
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
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product.name}>
                <Product
                  src={product.src}
                  name={product.name}
                  date={product.date}
                  desc={product.desc}
                />
              </div>
            );
          })}
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
            {projects.map((project) => {
              return (
                <div className="col-md-4 my-3" key={project.name}>
                  <Card
                    src={project.src}
                    role={project.name}
                    desc={project.desc}
                    name={``}
                    prof={``}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="conntainerr">
        <div className="my-5 py-5">
          <h1 className="text-center my-5">
            <span className="b-bottom">History</span>
          </h1>
        </div>

        {history.map((hist) => {
          return (
            <div className="row rounded mx-5 shadow-lg my-5" key={hist.name}>
              <History name={hist.name} desc={hist.desc} src={hist.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
