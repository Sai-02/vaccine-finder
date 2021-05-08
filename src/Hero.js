import React from "react";
import { useState } from "react";

const Hero = () => {
  const [showVaccine, setShowVaccine] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="hero">
      <article className="showVaccine hero-article">
        <h2>Find Vaccine Centres</h2>
        <p>
          Find vaccination centres along with their address and details just by
          giving pincode or district name
        </p>
      </article>
      <article className="showCertificate hero-article">
        <h2>Download Vaccination Certificate</h2>
        <p>
          If you are vaccinated takes the proof with you by downloading your
          vaccination certificate
        </p>
      </article>
    </section>
  );
};

export default Hero;
