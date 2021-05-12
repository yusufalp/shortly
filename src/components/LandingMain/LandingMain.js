import React from 'react';
import './LandingMain.css';
import GetStartedButton from '../Button/GetStarted';
import LandingAction from '../LandingAction/LandingAction';

const LandingMain = () => {
  return (
    <div className="landing-main">
      <div className="landing-group">
        <div className="landing-title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <GetStartedButton />
        </div>
        <div>
          <img className="landing-main-image" src="/images/illustration-working.svg" alt="person working on a desk" />
        </div>
      </div>
      <LandingAction />
    </div>
  );
};

export default LandingMain;