import React from "react";

export const Divider = ({label}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-30 h-0.5 bg-white"></div>
            <h6 className="uppercase w-42 text-center text-white text-sm tracking-wider font-bold">{label}</h6>
            <div className="w-30 h-0.5 bg-white"></div>
        </div>
    )
}