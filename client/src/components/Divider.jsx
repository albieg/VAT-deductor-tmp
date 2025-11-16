import React from "react";

export const Divider = ({label}) => {
    return (
        <div className="flex justify-center items-center select-none">
            <div className="w-27 h-0.5 bg-[var(--blue-accent)]/60"></div>
            <h6 className="uppercase w-44 text-center text-[var(--blue-accent)] text-sm tracking-wider font-bold">{label}</h6>
            <div className="w-27 h-0.5 bg-[var(--blue-accent)]/60"></div>
        </div>
    )
}