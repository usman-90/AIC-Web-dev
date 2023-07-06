import React, { useState } from "react";
import classes from "./EventBox.module.css";

const BlogBox = ({ img, title,desc, slug, StartDate, EndDate}) => {
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
              <p className="typeDate"><strong>Start Date : </strong></p>
              <p>{StartDate}</p>
            </div>
            </div>
          <div className={classes.bottomPart}>
            <div className={classes.dateRead}>
              <p className="typeDate"><strong>End Date : </strong></p>
              <p>{EndDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
