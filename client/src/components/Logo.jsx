import React from "react";

export const Logo = () => {
    return (
        <div className="flex flex-row gap-2">
            <h1 className="montserrat-700 text-4xl">Auto<span className="text-[var(--darkBlue-accent)] text-5xl">IVA</span></h1>
            <img src="/src/assets/logo-icon.svg" className="size-10"/>
        </div>
    )
}