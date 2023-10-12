import React from "react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";


function Swipper(props) {
  const listData = props.data;

  return (
    <div className="large-conatiner">
      <div className="small-conatiner">
        {listData?.map((indData) => {
          return <Card key={indData._id} {...indData} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ _id, name, location, pricePerAdult, rating, to_do_type, image }) => {
  const num = rating;
  const stars = Array(parseInt(num)).fill(0);

  return (
    <div className="card shadow text-light" style={{ width: "300px" }}>
      <Link className='text-decoration-none' to={`/package/${_id}`}>
        <div className="img">
          <img
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            className="img-fluid"
            src={image[0]}
            alt=""
          />
        </div>
        <h2 className="text-lead text-primary p  text-dark fw-bold fs-5 text-capitalize" >{name}</h2>
        <h2 className="fw-lighter text-dark " style={{ fontSize: "1.1em" }}>Price :{pricePerAdult} Birr</h2>
        <h2 className="text-muted lead mb-0" style={{ fontSize: "1.1em" }}>Ethiopia/{location}</h2>
        <h2 className="text-dark d-inline m-0 me-2">{to_do_type}</h2>
        <div className="text-warning d-inline">
          {stars.map((_, index) => {
            return <FaStar key={index} />;
          })}{" "}
        </div>
      </Link>
    </div>
  );
};

export default Swipper;
