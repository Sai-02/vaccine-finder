import React from "react";
import { useState } from "react";
import Certificate from "./Certificate";
import VaccineCenters from "./VaccineCenters";
import vaccine from "./images/vaccine.jpeg";
import vaccineCertificate from "./images/vaccine_certificate.jpeg";
import loadingImg from "./images/loading.gif";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [showVaccine, setShowVaccine] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  if (showVaccine == false && showCertificate == false && loading == false) {
    return (
      <section className="hero">
        <article className="showVaccine hero-article">
          <div className="hero-article-img-container">
            <img
              src={vaccine}
              alt="Vaccine imge"
              className="vaccine-img hero-article-img"
            />
          </div>
          <h2>Find Vaccine Centres</h2>
          <p>
            Find vaccination centres along with their address and details just
            by giving pincode or district name
          </p>
          <div className="hero-article-btn-container">
            <button
              className="hero-article-btn"
              onClick={() => {
                setLoading(true);
                setInterval(() => {
                  setLoading(false);
                  setShowVaccine(true);
                }, 1000);
              }}
            >
              Find
            </button>
          </div>
        </article>
        <article className="showCertificate hero-article">
          <div className="hero-article-img-container">
            <img
              src={vaccineCertificate}
              alt="Vaccine image"
              className="vaccine-img hero-article-img"
            />
          </div>
          <h2>Download Vaccination Certificate</h2>
          <p>
            If you are vaccinated take the proof with you by downloading your
            vaccination certificate
          </p>
          <div className="hero-article-btn-container">
            <button
              className="hero-article-btn"
              onClick={() => {
                setLoading(true);
                setInterval(() => {
                  setLoading(false);
                  setShowCertificate(true);
                }, 1000);
              }}
            >
              Download
            </button>
          </div>
        </article>
      </section>
    );
  } else if (loading) {
    return (
      <section className="loading-section">
        <img src={loadingImg} alt="" className="loading-section-img" />
      </section>
    );
  }
  if (showCertificate) {
    return <Certificate />;
  }
  if (showVaccine) {
    return <VaccineCenters />;
  }
};

export default Hero;
