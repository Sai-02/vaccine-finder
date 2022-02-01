import React from "react";
import slotsNotFound from "../images/slotsNotFound.jpg";

const Response = ({ Error, response }) => {
  try {
    let length = response.length;
  } catch (e) {
    Error = true;
  }

  let d = new Date();
  let date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
  const getUpdatedDate = (increment) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + increment);
    let date = `${tomorrow.getDate()}-${tomorrow.getMonth()}-${tomorrow.getFullYear()}`;
    return date;
  };
  const getSlotsInfo = (increment, sessions) => {
    let rawdate = new Date();
    rawdate.setDate(rawdate.getDate() + increment);
    let date = `${
      rawdate.getDate() > 9 ? rawdate.getDate() : "0" + rawdate.getDate()
    }-${
      rawdate.getMonth() > 9 ? rawdate.getMonth() : "0" + rawdate.getMonth()
    }-${rawdate.getFullYear()}`;
    console.log(date);
    let slot = sessions.find((session) => session.date === date);
    // console.log(slot);
    if (typeof slot === "undefined") {
      return <p className="no-slot">NA</p>;
    } else {
      return (
        <div className="slot-details">
          <p className="slot-capacity">{slot.available_capacity}</p>
          <p className="age-limit">{slot.min_age_limit}+</p>
          <p className="vaccine-type">{slot.vaccine}</p>
        </div>
      );
    }
  };

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
              <div className="response-table">
                <div className="table-headings">
                  <div className="table-heading">Center Name and details</div>
                  <div className="table-heading">{date}</div>
                  <div className="table-heading">{getUpdatedDate(1)}</div>
                  <div className="table-heading">{getUpdatedDate(2)}</div>
                  <div className="table-heading">{getUpdatedDate(3)}</div>
                  <div className="table-heading">{getUpdatedDate(4)}</div>
                  <div className="table-heading">{getUpdatedDate(5)}</div>
                  <div className="table-heading">{getUpdatedDate(6)}</div>
                </div>
                {response.map((singleResponse) => {
                  return (
                    <div className="table-row">
                      <div className="table-col">
                        <div className="hospital-name-cost-container">
                          <p className="hospital-name">
                            {singleResponse.name}{" "}
                          </p>
                          <p className="cost">{singleResponse.fee_type}</p>
                          {/* <p>{singleResponse.pincode}</p> */}
                        </div>
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(0, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(1, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(2, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(3, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(4, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(5, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(6, singleResponse.sessions)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default Response;
