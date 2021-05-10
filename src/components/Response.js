import React from "react";
import slotsNotFound from "../images/slotsNotFound.jpg";

const Response = ({ Error, response }) => {
  console.log(Error, response);
  return (
    <>
      {Error ? (
        <section className="response-error-section">
          <h3>Something went wrong....</h3>
          <p>Please try again later.</p>
        </section>
      ) : (
        <section className="response-section">
          {response.length == 0 ? (
            <>
              <h4>No slots available</h4>
              <div className="slots-not-found-img-container">
                <img
                  src={slotsNotFound}
                  alt="slots not available"
                  className="slots-not-found-img"
                />
              </div>
            </>
          ) : (
            <article className="response">
              <ul className="filter-btns">
                <li className="filter-btn">Age 18+</li>
                <li className="filter-btn">Age 45+</li>
                <li className="filter-btn">Covishield</li>
                <li className="filter-btn">Covaxin</li>
                <li className="filter-btn">Paid</li>
                <li className="filter-btn">Free</li>
              </ul>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default Response;
