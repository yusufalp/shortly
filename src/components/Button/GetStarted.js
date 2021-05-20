import React from 'react';
import './GetStarted.css';
import { useHistory } from 'react-router-dom';


const GetStartedButton = () => {

  let history = useHistory();

  const handleStart = () => {
    history.push('/quiz');
  };

  return (
    <button className="get-started-button" type="button" onClick={handleStart}>Get Started</button>
  );
};

export default GetStartedButton;