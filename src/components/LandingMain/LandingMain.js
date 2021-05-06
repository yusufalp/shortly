import React from 'react';

const LandingMain = () => {
  return (
    <div>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <button type="submit">Get Started</button>
      </div>
      <div>
        <img src="/images/illustration-working.svg" alt="person working on a desk" />
      </div>
      <div>
        <input type="text" name="shorten" id="shorten" placeholder="Shorten a link here..." />
        <button type="submit">Shorten it!</button>
      </div>
    </div>
  );
};

export default LandingMain;