import React from "react";
import { ReactComponent as Dots } from './svgs/icon-ellipsis.svg';
import Study from './svgs/icon-study.svg';
import work from './svgs/icon-work.svg';
import exercise from './svgs/icon-exercise.svg';
import play from './svgs/icon-play.svg';
import social from './svgs/icon-social.svg';
import self from './svgs/icon-self-care.svg';



export default function Card(props) {

    let color;
    let backImg;

    switch(props.name) {
        case 'Work':
            color = 'hsl(15, 100%, 70%)';
            backImg = work
            break;
        case 'Play':
            color = 'hsl(195, 74%, 62%)';
            backImg = play
            break;
        case 'Study':
            color = 'hsl(348, 100%, 68%)';
            backImg = Study
            break;
        case 'Exercise':
            color = 'hsl(145, 58%, 55%)';
            backImg = exercise
            break;
        case 'Social':
            color = 'hsl(264, 64%, 52%)';
            backImg = social
            break;
        case 'Self Care':
            color = 'hsl(43, 84%, 65%)';
            backImg = self
            break
        default: 'yezzir'
    }

    const styles = {
        backgroundColor: `${color}`
    }

    return (

        <div className="p-28  rounded-t-3xl rounded-b-[30px] relative" style={styles}>
            <div className="px-8 absolute w-full lg:h-4/5 h-3/4 bg-veryBlue rounded-3xl bottom-0 right-0">
                <div className="text-paleBlue h-full py-8 flex flex-col justify-around">
                    <div className="flex items-center justify-between ">
                        <h2 className="text-xl font-medium text-white">
                            {props.name}
                        </h2>
                        <div className="">
                            <Dots />
                        </div>
                    </div>
                    <div className="flex justify-between items-center
                                                        lg:flex-col lg:items-start">
                        <h1 className="text-[40px] lg:text-[54px] text-white font-light trans">{props.current}hrs</h1>
                        <h2>{props.last} - {props.previous}hrs</h2>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden absolute w-full lg:h-1/5 h-1/4  top-0 left-0 rounded-t-3xl">
                <div className=" w-fit ml-auto px-4 ">
                    <img src={backImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

