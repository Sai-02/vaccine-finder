import React from "react";
import { useState } from "react";
import vaccine from "./images/vaccine.jpeg";
import vaccineCertificate from "./images/vaccine_certificate.jpeg";

const Hero = () => {
  const [showVaccine, setShowVaccine] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

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
          Find vaccination centres along with their address and details just by
          giving pincode or district name
        </p>
        <div className="hero-article-btn-container">
          <button className="hero-article-btn">Find</button>
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
          <button className="hero-article-btn">Download</button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
