import React from "react";

export const EditBox = ({width, label, placeholder}) => {
    return(
        <div className={`flex flex-col mx-3 w-${width}`}>
            <p className="text-xs flex justify-center">{label}</p>
            <input className="h-12 bg-white/30 rounded-3xl pl-6 shadow-black/10 shadow-xl" placeholder={placeholder} />
        </div>
    )
}