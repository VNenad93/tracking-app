import React from "react";
import profilePic from './svgs/image-jeremy.png'
import { useState } from "react";
import './App.css'


export default function Profile(props) {

    const [checked, setChecked] = useState('Weekly')

    function clicked(event) {
        setChecked(event.target.value)
    }

    return (
        
        <div className="p-32 relative bg-veryBlue lg:row-span-2 rounded-3xl text-desBlue">
            <div className="bg-blue absolute w-full top-0 left-0 h-2/3 rounded-3xl z-10">
                <div className="flex items-center h-full justify-evenly
                                lg:flex-col lg:pl-10 lg:pb-10 lg:items-start lg:leading-tight">
                    <img className="w-16 lg:w-20 border-solid border-2 border-white rounded-full" src={profilePic} alt="" />
                    <div>
                        <h2 className="text-xl lg:text-lg text-paleBlue">Report for</h2>
                        <h1 className="lg:text-[38px] text-xl leading-10 text-white font-light">Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            <div className="bg-veryBlue absolute w-full h-1/3 bottom-0 left-0 rounded-b-3xl" >
                <div className="
                text-xl h-full
                flex justify-around items-center 
                lg:flex-col lg:items-start lg:pl-10 lg:py-4">
                    <input  className="hidden"
                            type="radio" 
                            name="size_1"
                            id="size_1"
                            value={'Daily'}  
                            checked={checked === 'Daily'} 
                            onChange={clicked}
                            onClick={props.daily}
                            />

                    <label  className=" cursor-pointer"  
                            htmlFor="size_1">Daily</label>
  
                    <input  className="hidden"
                            type="radio" 
                            name="size_2"
                            id="size_2"
                            value={'Weekly'}  
                            checked={checked === 'Weekly'} 
                            onChange={clicked}
                            onClick={props.weekly} 
                            />
                    <label  className=" cursor-pointer"  
                            htmlFor="size_2">Weekly</label>
  
                    <input  className="hidden"
                            type="radio" 
                            name="size_3"
                            id="size_3"
                            value={'Monthly'}  
                            checked={checked === 'Monthly'} 
                            onChange={clicked}
                            onClick={props.monthly} 
                            />
                    <label  className=" cursor-pointer"  
                            htmlFor="size_3">Monthly</label>
                </div>
            </div>
        </div>

    )

}