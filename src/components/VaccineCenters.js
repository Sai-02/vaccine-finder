import React from "react";
import { useState } from "react";
import { states } from "./states";
import Response from "./Response";

const VaccineCenters = () => {
  const [isPin, setIsPin] = useState(true);
  const [districts, setDistricts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [districtInput, setDistrictInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState([]);
  const findDistricts = async (e) => {
    let state = states.find((state) => {
      return e.target.value === state.state_name;
    });
    console.log(state);
    let districtList = await getDistrictList(state);
    setDistricts(districtList.districts);
  };
  const getDistrictList = async (state) => {
    let districtList = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state.state_id}`
    );
    let districtsListJson = await districtList.json();
    return await districtsListJson;
  };
  const handleSubmitForDistrict = async (e) => {
    e.preventDefault();
    if (districts.length == 0) {
      return;
    }
    if (districtInput === "") {
      return;
    }
    let districtID = districts.find((district) => {
      return district.district_name === districtInput;
    }).district_id;
    try {
      let response = await getResponseForDistrict(districtID);
      setResponse(response.centers);
      console.log(response);
    } catch (e) {
      setIsError(true);
    }
    setIsSearch(true);
  };
  const getResponseForDistrict = async (id) => {
    let d = new Date();
    let date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    let rawResponse = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${date}`
    );
    let response = await rawResponse.json();
    return response;
  };
  const handleSubmitForPin = async (e) => {
    e.preventDefault();
    try {
      let response = await getResponseForPin();
      setResponse(response.centers);
    } catch (e) {
      setIsError(true);
    }
    setIsSearch(true);
  };
  const getResponseForPin = async () => {
    let d = new Date();
    let date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    let rawResponse = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinInput}&date=${date}`
    );
    let response = await rawResponse.json();
    return response;
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
            <form className="pin-search-form" onSubmit={handleSubmitForPin}>
              <input
                type="text"
                value={pinInput}
                placeholder="Enter your pin"
                className="pin-search-input"
                onInput={(e) => setPinInput(e.target.value)}
              />

              <div className="pin-search-btn-container">
                <button className="search-btn" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="district-search">
            <form
              className="district-search-form"
              onSubmit={handleSubmitForDistrict}
            >
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
                <select
                  name="districts"
                  onInput={(e) => setDistrictInput(e.target.value)}
                >
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
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
      {isSearch ? <Response Error={isError} response={response} /> : <></>}
    </div>
  );
};

export default VaccineCenters;
