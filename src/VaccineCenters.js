import React from "react";
import { useState } from "react";
import { states } from "./components/states";

const VaccineCenters = () => {
  const [isPin, setIsPin] = useState(true);
  const [districts, setDistricts] = useState([]);
  const findDistricts = async (e) => {
    let state = states.find((state) => {
      return e.target.value === state.state_name;
    });
    console.log(state);
    let districtList = await getDistrictList(state);
    setDistricts(districtList.districts);
    console.log(districts);
  };
  const getDistrictList = async (state) => {
    let districtList = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state.state_id}`
    );
    let districtsListJson = await districtList.json();
    return await districtsListJson;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="vaccine-centers-container">
      <section className="vaccine-centers">
        <h2>search centers by</h2>
        <div className="vaccine-centers-btn-container">
          <button
            className={`vaccine-centers-btn ${
              isPin ? "vaccine-centers-btn-clicked" : ""
            } `}
            onClick={(e) => {
              setIsPin(!isPin);
            }}
          >
            Pin
          </button>
          <button
            className={`vaccine-centers-btn ${
              !isPin ? "vaccine-centers-btn-clicked" : ""
            } `}
            onClick={(e) => {
              setIsPin(!isPin);
            }}
          >
            District
          </button>
        </div>
        {isPin ? (
          <div className="pin-search">
            <form className="pin-search-form">
              <input
                type="text"
                placeholder="Enter your pin"
                className="pin-search-input"
              />

              <div className="pin-search-btn-container">
                <button className="search-btn" onClick={handleSubmit}>
                  Search
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="district-search">
            <form className="district-search-form">
              <div className="select-state-container">
                <label>Select State</label>
                <select
                  name="states"
                  onInput={(e) => {
                    findDistricts(e);
                  }}
                >
                  {states.map((state) => {
                    return (
                      <option value={state.state_name}>
                        {state.state_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="select-district-container">
                <label>district</label>
                <select name="districts">
                  {districts.map((district) => {
                    return (
                      <option value={district.district_name}>
                        {district.district_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="district-search-btn-container">
                <button
                  className="search-btn district-search-btn"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default VaccineCenters;
