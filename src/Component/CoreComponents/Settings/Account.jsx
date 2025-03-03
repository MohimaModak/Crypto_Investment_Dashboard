import React, { useState, useEffect } from 'react';
import photo from "../../../assets/Gallery/10-1-Writting.png";

export default function WritingTest() {
  const [text1, setText1] = useState(""); // State to hold the first text input
  const [text2, setText2] = useState(""); // State to hold the second text input
  const [startTime1, setStartTime1] = useState(null); // To store the start time for the first textarea
  const [startTime2, setStartTime2] = useState(null); // To store the start time for the second textarea
  const [elapsedTime1, setElapsedTime1] = useState(0); // To store elapsed time for the first textarea
  const [elapsedTime2, setElapsedTime2] = useState(0); // To store elapsed time for the second textarea
  const [typingTimeout1, setTypingTimeout1] = useState(null); // To handle timeout for stopping timer 1
  const [typingTimeout2, setTypingTimeout2] = useState(null); // To handle timeout for stopping timer 2

  // Start the timer when the user starts typing in the first textarea
  const handleChange1 = (e) => {
    if (startTime1 === null) {
      setStartTime1(Date.now()); // Start timer when the user starts typing in textarea 1
    }
    setText1(e.target.value); // Update text for textarea 1

    // Reset the timeout whenever the user types
    if (typingTimeout1) {
      clearTimeout(typingTimeout1);
    }

    // Stop the timer after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      clearInterval(timerInterval1); // Stop the timer for textarea 1 after inactivity
    }, 2000);
    setTypingTimeout1(timeout);
  };

  // Start the timer when the user starts typing in the second textarea
  const handleChange2 = (e) => {
    if (startTime2 === null) {
      setStartTime2(Date.now()); // Start timer when the user starts typing in textarea 2
    }
    setText2(e.target.value); // Update text for textarea 2

    // Reset the timeout whenever the user types
    if (typingTimeout2) {
      clearTimeout(typingTimeout2);
    }

    // Stop the timer after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      clearInterval(timerInterval2); // Stop the timer for textarea 2 after inactivity
    }, 2000);
    setTypingTimeout2(timeout);
  };

  // Update the timers for each textarea every second
  useEffect(() => {
    let interval1, interval2;
    if (startTime1 !== null) {
      interval1 = setInterval(() => {
        setElapsedTime1(Math.floor((Date.now() - startTime1) / 1000)); // Calculate elapsed time in seconds for textarea 1
      }, 1000);
    }
    if (startTime2 !== null) {
      interval2 = setInterval(() => {
        setElapsedTime2(Math.floor((Date.now() - startTime2) / 1000)); // Calculate elapsed time in seconds for textarea 2
      }, 1000);
    }

    // Clear intervals when component unmounts or the timer is stopped
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [startTime1, startTime2]);

  // Format elapsed time as mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="h-screen overflow-y-auto w-full bg-white text-black">
      <div className="p-5">
        <div className='flex'>
          <div className='w-2/4'>
          <h1 className="font-bold text-xl my-10">Test-1</h1>
          <img src={photo} alt="Writing Test" />
          </div>

          <div>
            <div className="mt-5">
              <h3 className="text-xl font-semibold">Time Elapsed: {formatTime(elapsedTime1)}</h3>
            </div>


            <div className="mt-10">
              <h2 className="font-bold text-xl">Write your response:</h2>
              <textarea
                value={text1}
                onChange={handleChange1}
                className="w-[1000px] h-96 p-2 mt-2 border-2 border-gray-300 rounded-lg text-black"
                placeholder="Write your answer here..."
              />
            </div>

          </div>


        </div>


        <h1 className="font-bold text-xl my-10">Test-2</h1>
        <p className="text-lg">
          Some people think that all university students should study whatever they like.
          Others believe that they should only be allowed to study subjects that will be useful in
          the future, such as those related to science and technology. Discuss both these views and give your own opinion.
        </p>
        
        <div className="mt-10">
          <h2 className="font-bold text-xl">Write your response:</h2>
          <textarea
            value={text2}
            onChange={handleChange2}
            className="w-full h-96 p-2 mt-2 border-2 border-gray-300 rounded-lg text-black"
            placeholder="Write your answer here..."
          />
        </div>
      </div>
    </div>
  );
}
