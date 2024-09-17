import React, { createContext, useState, useEffect } from 'react';
import Redlight from '../Redlight/Redlight';
import Yellowlight from '../Yellowlight/Yellowlight';
import Greenlight from '../Greenlight/Greenlight';

import "./Trafficlight.css"

export const store = createContext();


const Trafficlight = () => {
    const [redOn, setRedOn] = useState(false);
    const [orangeOn, setOrangeOn] = useState(false);
    const [greenOn, setGreenOn] = useState(true);
    const [timer, setTimer] = useState(0);
    const [timeCount, setTimeCount] = useState(10);
    const [subColor, setSubColor] = useState("green");

    const green = "#00ff00";
    const orange = " #ffc400";
    const red = "#ff0000";
    const gDim = "#0c350c";
    const oDim = "#36361a";
    const rDim = "#330f0f";

    const redTimer = 7;
    const oraTimer = 3;
    const greTimer = 10;

    const totalTime = greTimer + oraTimer + redTimer;

    useEffect(() => {
        const interval = setInterval(() => {
            let newTimer = (timer + 1) % totalTime;
            setTimer(newTimer);

            if (newTimer < greTimer) {
                setGreenOn(true);
                setOrangeOn(false);
                setRedOn(false);
                setTimeCount(greTimer - newTimer);
                setSubColor("green");
            } else if (newTimer < greTimer + oraTimer) {
                setGreenOn(false);
                setOrangeOn(true);
                setRedOn(false);
                setTimeCount(oraTimer - (newTimer - greTimer));
                setSubColor("red");
            } else {
                setGreenOn(false);
                setOrangeOn(false);
                setRedOn(true);
                setTimeCount(redTimer - (newTimer - greTimer - oraTimer));
                setSubColor("red");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div>

            <div className="signalbody">
                <div id="red" className="lamp red" style={{ backgroundColor: redOn ? red : rDim }}></div>
                <div id="orange" className="lamp orange" style={{ backgroundColor: orangeOn ? orange : oDim }}></div>
                <div id="green" className="lamp green" style={{ backgroundColor: greenOn ? green : gDim }}></div>
            </div>
            <div className="pole"></div>

            <div className="signalbase"></div>

            <div className="timer">
                <div className="num">{timeCount}</div>

            </div>

            <div className="display">

                <div className="human">
                    <svg height="80" width="80">
                        <g id="human">
                            <circle id="human-head" r="10" cx="30" cy="30" fill={subColor}></circle>
                            <polyline
                                id="human-body"
                                points="30 30, 30 60, 40 80, 30 60, 20 80, 30 60, 30 40, 45 55, 30 40, 15 55, 30 40"
                                style={{ stroke: subColor, strokeLinecap: 'round', strokeWidth: 8 }}
                            ></polyline>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    );
};


export default Trafficlight