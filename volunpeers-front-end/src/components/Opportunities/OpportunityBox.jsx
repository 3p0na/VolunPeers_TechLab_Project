import React, { useState, useEffect } from 'react';
import './OpportunityStyling.css';
import CityImage from '../../Images/citywithpark.webp';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router

const OpportunityBox = () => {
  const { companyId } = useParams(); // Assuming you have a route parameter named companyId
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Fetch company data based on companyId
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`/api/companies/${companyId}`);
        if (response.ok) {
          const data = await response.json();
          setCompanyData(data);
        } else {
          console.error('Failed to fetch company data');
        }
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };
    fetchCompanyData();
  }, [companyId]);

  return (
    <div className="Opportunities">
      <div className="volunteeringOpportunity">
        <div className="OpportunityTitle">
          <h3>Title: </h3>
          <span className="Theme">Theme: </span>
          <span className="Location">Location: </span>
          <img src={CityImage} alt="" />
        </div>
        <span className="Date">
          Date: {new Date().getDate()} / {new Date().getMonth() + 1} /{' '}
          {new Date().getUTCFullYear()}
        </span>
        <div className="TextSection">
          <h4>Company</h4>
          <p>
            Ever wanted to clean the Area? Join us now! <br></br>Embark on a
            transformative journey to revitalize our city!<br></br> Join hands
            in a community effort, and together, let's sweep away the chaos, one
            clean street at a time. Your actions today shape a cleaner, brighter
            future for all. #CleanCityRevolution
          </p>
        </div>
      </div>
      <button className="ReadMoreButton" aria-label="Read more">
        Read more
      </button>
    </div>
  );
};

export default OpportunityBox;
