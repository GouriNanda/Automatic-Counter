import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const [buttonText, setButtonText] = useState('Stop');

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000); // Increment every second
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount or isCounting change
  }, [isCounting]);

  const toggleCounting = () => {
    if (isCounting) {
      setIsCounting(false);
      setButtonText('Continue');
    } else {
      setIsCounting(true);
      setButtonText('Stop');
    }
  };

  const resetCounter = () => {
    setCounter(0);
    setIsCounting(true); 
    setButtonText('Stop'); 
  };

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center text-dark'>Counter</h1>
        <h2 className='text-center'>{counter}</h2>
        <div className='text-center'>
          <button className='btn btn-primary m-3' onClick={toggleCounting}>
            {buttonText}
          </button>
          <button className='btn btn-warning m-3' onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
