import React from "react";
import profilePic from './svgs/image-jeremy.png'


export default function Profile(props) {

    return (
        
        <div id="cardContainer" className="p-32 relative bg-veryBlue lg:row-span-2 rounded-3xl text-desBlue">
            <div id="frontCard" className="bg-blue absolute w-full top-0 left-0 h-2/3 rounded-3xl z-10">
                <div className="flex items-center h-full justify-evenly
                                lg:flex-col lg:pl-10 lg:pb-10 lg:items-start lg:leading-tight">
                    <img className="w-24 border-solid border-4 border-white rounded-full" src={profilePic} alt="" />
                    <div>
                        <h2 className="text-xl lg:text-lg text-paleBlue">Report for</h2>
                        <h1 className="text-[38px] line text-white font-light">Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            <div id="backCard" className="bg-veryBlue absolute w-full h-1/3 bottom-0 left-0 rounded-b-3xl" >
                <div className="
                text-2xl h-full
                flex justify-around items-center 
                lg:flex-col lg:items-start lg:pl-10 lg:text-xl lg:py-4">
                    <a href="#" className="hover:text-paleBlue transition-all" onClick={props.daily} >Daily</a>
                    <a href="#" className="hover:text-paleBlue transition-all" onClick={props.weekly} >Weekly</a>
                    <a href="#" className="hover:text-paleBlue transition-all" onClick={props.monthly} >Monthly</a>
                </div>
            </div>
        </div>

    )

}

// Finished version

// export default function Profile() {

//     return (
        
//         <div id="cardContainer" className="p-32 relative bg-veryBlue lg:row-span-2 rounded-3xl text-desBlue">
//             <div id="frontCard" className="bg-blue absolute w-full top-0 left-0 h-2/3 rounded-3xl z-10">
//                 <div className="flex items-center h-full justify-evenly
//                                 lg:flex-col lg:pl-10 lg:pb-10 lg:items-start lg:leading-tight">
//                     <img className="w-24 border-solid border-4 border-white rounded-full" src="/svgs/image-jeremy.png" alt="" />
//                     <div>
//                         <h2 className="text-xl lg:text-lg text-paleBlue">Report for</h2>
//                         <h1 className="text-[38px] line text-white font-light">Jeremy Robson</h1>
//                     </div>
//                 </div>
//             </div>
//             <div id="backCard" className="bg-veryBlue absolute w-full h-1/3 bottom-0 left-0 rounded-b-3xl" >
//                 <div className="
//                 text-2xl h-full
//                 flex justify-around items-center 
//                 lg:flex-col lg:items-start lg:pl-10 lg:text-xl lg:py-4">
//                     <a href="#" className="hover:text-paleBlue transition-all">Daily</a>
//                     <a href="#" className="hover:text-paleBlue transition-all">Weekly</a>
//                     <a href="#" className="hover:text-paleBlue transition-all">Monthly</a>
//                 </div>
//             </div>
//         </div>

//     )

// }