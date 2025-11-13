import React from "react";

export const Logo = () => {
    return (
        <div className="flex flex-row gap-2 items-baseline select-none">
            <h1 className="alan-sans-500 text-4xl text-[var(--blue-accent)]">Auto<span className="text-[var(--darkBlue-accent)] text-5xl">IVA</span></h1>
            <img src="/src/assets/logo.svg" className="size-9"/>
        </div>
    )
}