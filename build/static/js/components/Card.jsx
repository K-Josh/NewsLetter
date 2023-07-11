import React from "react";

function Card(props) {
    return (
        <div
        className="flex items-center bg-slate-500 justify-center sm:h-screen overflow-x-hidden overflow-y-hidden"
        >
        <div
        className="bg-zinc-700 rounded-2xl p-3 md:mx-auto md:min-w-2xl"
        >
        <div
        className="flex flex-col md:flex-row rounded-l-xl"
        >
        <img src={props.imgURL} alt="green" 
        className="rounded-xl object-fit h-80 md:h-72 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-75"
        />
        <div className="p-4 md:p-12">
          <h2 
            className="text-center text-white font-mono text-xl font-medium md:text-left capitalize md:space-x-5">
               {props.heading}
            </h2>
          <p
          className="my-3 tracking-wide text-white text-xs leading-4 text-center md:text-left md:mt-7 ">
               {props.paragraph}
            </p>
            <div
            className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-3 md:space-y-0 md:mt-9 md:mx-7">
               <input 
                 type="email"
                 placeholder="Enter your Email Address"
                 className="bg-zinc-700 rounded-md px-4 p-4 text-white border border-zinc-400 placeholder:text-xs md:text-left placeholder:md:text-left focus:outline-none "  
                />
                <button
                className="hover:text-white hover:bg-line-700 bg-yellow-600 rounded-md px-4 py-2 text-xs duration-500">
                    Subscribe
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Card;