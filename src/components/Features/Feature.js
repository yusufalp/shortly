import React from 'react';

const Feature = (props) => {
  return (
    <div className="single-feature">
      <div className={props.className}>
        <h3>{props.name}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default Feature