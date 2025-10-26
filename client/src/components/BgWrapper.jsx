import React from "react";

export const BgWrapper = ({children}) => {
    return (
        <div className="w-screen h-screen bg-[url(/src/assets/background.jpg)] bg-cover">
            <div className="w-screen h-screen backdrop-blur-xl">
                {children}
            </div>
        </div>
    )
}