import React from "react";

export const ExpandModal = ({onClick, title, content}) => {
    return (
        <div className="bg-[var(--blue-accent)] mt-6 rounded-2xl h-70 w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 z-200">
            <button>
                <img onClick={onClick} src="/src/assets/close-modal.svg" className="size-7 absolute right-4 top-4 cursor-pointer select-none"></img>
            </button>

            <div className="flex flex-col items-center pt-16 gap-8 px-8">
            <h3 className="uppercase text-white font-bold select-none">{title}</h3>
            <p className="text-white text-sm text-left">
               {content}
            </p>
            </div>
        </div>
    )
}