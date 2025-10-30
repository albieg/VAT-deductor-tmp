import React from "react";

export const Menu = () => {
    return (
        <div className="sticky bottom-2 ">
        <div className="h-16 w-106 md:w-148 lg:w-162 bg-white/50 rounded-4xl flex flex-row gap-10 md:gap-16 lg:gap-18 items-center justify-center backdrop-blur-sm">
            <button>
                <img src="/src/assets/address-book.svg" className="size-13 cursor-pointer"></img>
            </button>
            <button>
                <img src="/src/assets/home.svg" className="size-13 cursor-pointer"></img>
            </button>
            <button>
                <img src="/src/assets/receipts.svg" className="size-13 cursor-pointer"></img>
            </button>
            <button>
                <img src="/src/assets/circle-add.svg" className="size-13 cursor-pointer"></img>
            </button>
        </div>
        </div>
    )
}