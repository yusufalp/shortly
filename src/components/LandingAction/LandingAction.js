import React from 'react';
import './LandingAction.css';

const LandingAction = () => {
  return (
    <div className="landing-action-main">
      <input type="text" name="shorten" id="shorten" placeholder="Shorten a link here..." />
      <button type="submit">Shorten it!</button>
    </div>
  );
};

export default LandingAction;