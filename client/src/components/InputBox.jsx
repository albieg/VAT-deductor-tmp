import React from "react";

export const InputBox = ({onChange, value, id, width, htmlFor, label}) => {
    return(
        <div className="relative mx-3">
            <input
            value={value}
            onChange={onChange}
            id={id}
            text="text"
            placeholder=" "
            className={`peer bg-[var(--lightBlue-accent)] h-12 w-${width} rounded-3xl p-6 text-[var(--darkBlue-accent)] placeholder-transparent focus:outline-none shadow-black/10 shadow-xl`}
            />
            <label 
            htmlFor={htmlFor}
            className="
            absolute left-6 text-xs text-white/70 
            transition-all duration-200 
            peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-white/80 
            peer-placeholder-shown:text-base 
            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white"
            >
                {label}
            </label>
        </div>
    )
}