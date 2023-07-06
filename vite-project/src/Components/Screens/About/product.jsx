/* eslint-disable react/prop-types */
const Product = ({src,name,date,desc}) => {
    return (
        <div className="product p-3 rounded my-4">
              <div>
                <img
                  src={src}
                  alt=""
                />
              </div>
              <h2 className="text-success fs-4 my-3">
                {name}
              </h2>
              <p className="text-warning fs-5 fst-italic ">{date}</p>
              <p className="text-dark ">
               {desc}
              </p>
            </div>
    )
}

export default Product;