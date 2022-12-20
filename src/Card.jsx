import React from "react";
import { ReactComponent as Dots } from './svgs/icon-ellipsis.svg';


export default function Card(props) {

    let color;
    let backImg;

    switch(props.name) {
        case 'Work':
            color = 'hsl(15, 100%, 70%)';
            backImg = '/src/svgs/icon-work.svg'
            break;
        case 'Play':
            color = 'hsl(195, 74%, 62%)';
            backImg = '/src/svgs/icon-play.svg'
            break;
        case 'Study':
            color = 'hsl(348, 100%, 68%)';
            backImg = '/src/svgs/icon-study.svg'
            break;
        case 'Exercise':
            color = 'hsl(145, 58%, 55%)';
            backImg = '/src/svgs/icon-exercise.svg'
            break;
        case 'Social':
            color = 'hsl(264, 64%, 52%)';
            backImg = '/src/svgs/icon-social.svg'
            break;
        case 'Self Care':
            color = 'hsl(43, 84%, 65%)';
            backImg = '/src/svgs/icon-self-care.svg'
            break
        default: 'yezzir'
    }

    const styles = {
        backgroundColor: `${color}`
    }

    return (

        <div id="cardContainer" className="p-28  rounded-t-3xl rounded-b-[30px] relative" style={styles}>
            <div id="frontCard" className="px-8 absolute w-full lg:h-4/5 h-3/4 bg-veryBlue rounded-3xl bottom-0 right-0">
                <div id="textContainer" className="text-paleBlue h-full py-8 flex flex-col justify-around">
                    <div id="topContainer" className="flex items-center justify-between ">
                        <h2 className="text-xl font-medium text-white">
                            {props.name}
                        </h2>
                        <div className="">
                            <Dots />
                        </div>
                    </div>
                    <div id="bottomContainer" className="flex justify-between items-center
                                                        lg:flex-col lg:items-start">
                        <h1 className="text-[40px] lg:text-[54px] text-white font-light">{props.current}hrs</h1>
                        <h2>Last Week - {props.previous}hrs</h2>
                    </div>
                </div>
            </div>
            <div id="backCard" className="overflow-hidden absolute w-full lg:h-1/5 h-1/4  top-0 left-0 rounded-t-3xl">
                <div className=" w-fit ml-auto px-10 scale-[1.6] mt-2">
                    <img src={backImg} />
                </div>
            </div>
        </div>
    )
}

