import React, { useState } from "react";
import classes from "./EventBox.module.css";

const BlogBox = ({ img, title,desc, slug, date, latest }) => {
  return (
    <div>
      <div className={!latest?classes.container:classes.container2}>
        <img src={img} alt="Event Image" className={!latest?classes.BlogImage:classes.BlogImage2} />
        <div className={classes.textContainer}>
          <div>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.author}>
              {desc}
            </p>
          </div>
          <div className={classes.bottomPart}>
            <div className={classes.dateRead}>
              <p className="typeDate"><strong>Dates : </strong></p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
