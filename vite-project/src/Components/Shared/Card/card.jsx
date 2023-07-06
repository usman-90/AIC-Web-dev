/* eslint-disable react/prop-types */
import "./card.css";
const Card = ({src,role,name,prof,desc}) => {
  return (
    <div className="flip-card rounded">
      <div className="flip-card-inner rounded">
        <div className="px-3 py-1 bg-light d-flex flex-column align-items-center justify-content-around flip-card-front h-100 rounded">
          <img
            src={src}
            alt="Avatar"
            className="rounded-circle"
            style={{ width: "16rem", height: "70%" }}
          />
          <h3 className="my-1">{role}</h3>
        </div>
        <div className="px-3 py-3 bg-dark text-light flip-card-back rounded">
          <h1>{name}</h1>
          <p>{prof}</p>
          <p>{desc}</p>
         
        </div>
      </div>
    </div>
  );
};
export default Card;
