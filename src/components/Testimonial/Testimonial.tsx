import React from "react";
import "./Testimonial.scss";
import person1 from "../../assets/images/person-1.png";
import person2 from "../../assets/images/person-2.png";
import person3 from "../../assets/images/person-3.png";

const customers = [person1, person2, person3];

const Testimonial = () => (
  <div className="testimonial">
    <p className="small-label">Testimonial</p>
    <p className="large-label">Our Happy Customers</p>
    <div className="customers">
      {customers.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image} alt="Customer" />
        </div>
      ))}
    </div>
    <p className="name">David B. Hairston</p>
    <p className="review">
      The taste was excellent. The service was good, very fast response. The
      food was delicious, thank you so much.
    </p>
  </div>
);

export default Testimonial;
