import React from "react";

export const Header = ({children}) => {
    return (
        <div className="h-auto w-full sticky top-0 bg-white/50 backdrop-blur-sm">
            {children}
        </div>
    )
}