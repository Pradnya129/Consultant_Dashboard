
'use client';

import React, { useEffect, useState } from 'react';
import '../../../../dist/assets/vendor/aos/dist/aos.css';
import '../../../../dist/assets/vendor/bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const Header = () => {
  const [ConsultantData, setConsultantData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5056/api/ConsultantProfile/getConsultantProfile");
        if (!response.ok) throw new Error("Failed to fetch consultant data");
        const result = await response.json();
        const data = result[0];
        setConsultantData(data);
      } catch (error) {
        console.error("Error fetching consultant data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header id="header" className="navbar navbar-expand-lg navbar-end bg-transparent position-absolute top-0 w-100 z-3 mt-3">
      <div className="container">
        <div className="w-100 d-flex justify-content-between">
          <div className="d-flex flex-column flex-md-row">
            <ul className="navbar-nav me-md-3">
              <li className="nav-item">
                <a className="btn btn-light font-semibold btn-xs text-xs"
                   href={ConsultantData.locationURL}
                   target="_blank" rel="noopener noreferrer">
                  🏥 {ConsultantData.hospitalClinicAddress}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn btn-light btn-xs text-xs font-extrabold"
                   href={`mailto:${ConsultantData.email}`}
                   target="_blank" rel="noopener noreferrer">
                  📧 {ConsultantData.email}
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item d-flex gap-2">
              <a className="btn btn-soft-light rounded bg-light text-dark btn-xs btn-icon"
                 href={ConsultantData.facebookId} target="_blank" rel="noopener noreferrer">
                <i className="bi-facebook"></i>
              </a>
              <a className="btn btn-soft-light rounded bg-light text-dark btn-xs btn-icon"
                 href={ConsultantData.youtubeId} target="_blank" rel="noopener noreferrer">
                <i className="bi-youtube"></i>
              </a>
              <a className="btn btn-soft-light rounded bg-light text-dark btn-xs btn-icon"
                 href={ConsultantData.twitterId} target="_blank" rel="noopener noreferrer">
                <i className="bi-twitter"></i>
              </a>
              <a className="btn btn-soft-light rounded bg-light text-dark btn-xs btn-icon"
                 href={ConsultantData.instagramId} target="_blank" rel="noopener noreferrer">
                <i className="bi-instagram"></i>
              </a>
            </li>
            <li className="nav-item ms-4">
              <button className="btn bg-light py-2 btn-transition font-thin ms-5" type="button">
                <Link href="/Login" className="text-decoration-none">Log in</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
