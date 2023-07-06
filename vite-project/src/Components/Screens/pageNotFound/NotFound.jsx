import { Link } from "react-router-dom";
import error from "../../../assets/images/error.jpg";
import style from './notfound.module.scss'

const NotFound = () => {
  return (
    <section >
      <div className={style.imgContainer}>
        <img src={error} alt="" />
      </div>
        <p>
            <Link to='/'>Back to Home </Link>
        </p>
    </section>
  );
};

export default NotFound;
