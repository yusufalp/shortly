import React from 'react';
import './Features.css';

import Feature from './Feature';

const listOfFeatures = [
  {
    className: "brand-recognition",
    details: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    name: "Brand Recognition",
  },
  {
    className: "detailed-records",
    details: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    name: "Detailed Records",
  },
  {
    className: "fully-customizable",
    details: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    name: "Fully Customizable",
  },
]

const Features = () => {
  return (
    <div className="features-main">
      <div className="features-title">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>
      </div>
      <div className="features-group">
        {listOfFeatures.map(feature => {
          return (
            <Feature className={feature.className} details={feature.details} name={feature.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Features;