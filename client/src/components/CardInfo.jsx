import React from "react";

export const CardInfo = ({onClick, header, value}) => {
    return (
        <div className="text-white text-sm flex justify-between px-6 py-5">
            <p className="uppercase">{header}</p>
            <div className="w-48"></div>
            <p onClick={onClick} className={onClick ? "font-bold truncate cursor-pointer": "font-bold truncate"}>{value}</p>
        </div>
    )
}