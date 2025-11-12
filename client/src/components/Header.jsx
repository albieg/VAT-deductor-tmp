import React from "react";

export const Header = ({children}) => {
    return (
        <div className="h-auto w-full sticky top-0 bg-white/40 backdrop-blur-sm z-100 flex justify-center select-none">
            <div className="w-112 md:w-148 lg:w-162">
                {children}
            </div>
        </div>
    )
}