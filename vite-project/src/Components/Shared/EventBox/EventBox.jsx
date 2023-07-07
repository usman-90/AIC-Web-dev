import React, { useState } from "react";
import classes from "./EventBox.module.css";

<<<<<<< HEAD
const BlogBox = ({ img, title,desc, slug, startDate,endDate, latest }) => {
=======
const BlogBox = ({ img, title,desc, slug, StartDate, EndDate}) => {
>>>>>>> 34e8d378c3185fb0e1801a3cd4cc8cb26b48fc1e
  return (
    <div>
      <div className={classes.container}>
        <img src={img} alt="Event Image" className={classes.BlogImage} />
        <div className={classes.textContainer}>
          <div>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.author}>
              {desc}
            </p>
          </div>
          <div className={classes.bottomPart}>
            <div className={classes.dateRead}>
<<<<<<< HEAD
              <p className="typeDate"><strong>Dates : </strong></p>
              <p><strong>{startDate}</strong> --- <strong>{endDate}</strong></p>
=======
              <p className="typeDate"><strong>Start Date : </strong></p>
              <p>{StartDate}</p>
            </div>
            </div>
          <div className={classes.bottomPart}>
            <div className={classes.dateRead}>
              <p className="typeDate"><strong>End Date : </strong></p>
              <p>{EndDate}</p>
>>>>>>> 34e8d378c3185fb0e1801a3cd4cc8cb26b48fc1e
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
