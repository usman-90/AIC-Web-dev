/* eslint-disable react/prop-types */

const History = ({ src, desc, name }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="d-flex h-100 px-5  flex-column pp ">
          <h2 className="fs-1 my-4 text-success">{name}</h2>
          <p className="text-primary-emphasis fs-4">{desc}</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="">
          <img
            width={"100%"}
            height={"100%"}
            className="rounded"
            src={src}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default History;
