import React from "react";

export const InfoLine = ({onClick, header, value, divider, width}) => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div onClick={onClick} className={onClick? "text-[var(--blue-accent)] text-sm px-6 py-6 cursor-pointer w-full flex flex-row justify-between" : "text-[var(--blue-accent)] text-sm px-6 py-6 w-full flex flex-row justify-between"}>
            <p className="uppercase pr-16 select-none">{header}</p>
            <div className={width}></div>
            <p className="font-bold truncate">{value}</p>
        </div>
        { divider &&
        <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-1"/>
        }
        </div>
    )
}