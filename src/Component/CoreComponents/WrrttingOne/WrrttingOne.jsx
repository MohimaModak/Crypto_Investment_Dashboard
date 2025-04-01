import React, { useState, useEffect } from 'react';
import photo1 from "../../../assets/Gallery/17-1.png";
import photo2 from "../../../assets/Gallery/17-1-one.png";

export default function WrrttingOne() {

    const [text1, setText1] = useState(""); // State to hold the first text input
    const [text2, setText2] = useState(""); // State to hold the second text input
    const [startTime1, setStartTime1] = useState(null); // To store the start time for the first textarea
    const [startTime2, setStartTime2] = useState(null); // To store the start time for the second textarea
    const [elapsedTime1, setElapsedTime1] = useState(0); // To store elapsed time for the first textarea
    const [elapsedTime2, setElapsedTime2] = useState(0); // To store elapsed time for the second textarea
    const [typingTimeout1, setTypingTimeout1] = useState(null); // To handle timeout for stopping timer 1
    const [typingTimeout2, setTypingTimeout2] = useState(null); // To handle timeout for stopping timer 2
    const handleChange1 = (e) => {
        if (startTime1 === null) {
            setStartTime1(Date.now());
        }
        setText1(e.target.value);

        if (typingTimeout1) {
            clearTimeout(typingTimeout1);
        }

        const timeout = setTimeout(() => {
            clearInterval(timerInterval1);
        }, 2000);
        setTypingTimeout1(timeout);
    };

    const handleChange2 = (e) => {
        if (startTime2 === null) {
            setStartTime2(Date.now());
        }
        setText2(e.target.value);


        if (typingTimeout2) {
            clearTimeout(typingTimeout2);
        }

        const timeout = setTimeout(() => {
            clearInterval(timerInterval2);
        }, 2000);
        setTypingTimeout2(timeout);
    };

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

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [startTime1, startTime2]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="h-screen overflow-y-auto w-full bg-white text-black">
            <div className="p-5">
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Time Elapsed: {formatTime(elapsedTime1)}</h3>
                </div>
                <div className='flex'>

                    <div className='h-screen overflow-y-auto'>
                        <h1 className="font-bold text-xl my-10">Test-1</h1>
                        <br /><h1 className='font-bold text-xl'>The maps illustrate an industrial area in Norbiton in the present day compared with plans for future development of the site.
                        </h1> <br />
                        <img src={photo1} className='w-[800px]' />
                        <br />
                        <img src={photo2} className='w-[800px]' />
                    </div>

                    <div className="mt-10 h-screen overflow-y-auto">
                        <h2 className="font-bold text-xl">Write your response:</h2>
                        <textarea
                            value={text1}
                            onChange={handleChange1}
                            className="w-[600px] h-screen p-2 mt-2 border-2 border-black rounded-lg text-black"
                            placeholder="Write your answer here..."
                        />
                    </div>

                </div>
                <h1 className="font-bold text-xl my-10">Test-2</h1>
                <p className="text-lg">
                The table and charts below give information on the police budget for 2017 and 2018 in one area of Britain. The table shows where the money came from and the charts show how it was distributed.
                <br />
                Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
                </p>

                <div className="mt-10">
                    <h2 className="font-bold text-xl">Write your response:</h2>
                    <textarea
                        value={text2}
                        onChange={handleChange2}
                        className="w-full h-96 p-2 mt-2 border-2 border-black rounded-lg text-black"
                        placeholder="Write your answer here..."
                    />
                </div>
            </div>
        </div>
    )
}
