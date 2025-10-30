import React from "react";

export const CardInfo = ({onClick, header, value, divider, width}) => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div onClick={onClick} className={onClick? "text-white text-sm px-6 py-5 cursor-pointer w-full flex flex-row justify-between" : "text-white text-sm px-6 py-5 w-full flex flex-row justify-between"}>
            <p className="uppercase pr-16">{header}</p>
            <div className={width}></div>
            <p className="font-bold truncate">{value}</p>
        </div>
        { divider &&
        <div className="w-80 h-0.5 bg-white/20 mt-1"></div>
        }
        </div>
    )
}