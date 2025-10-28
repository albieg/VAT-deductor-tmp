import React from "react";

export const Menu = () => {
    return (
        <div className="h-16 w-106 bg-white/50 rounded-4xl flex flex-row gap-10 items-center justify-center">
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
    )
}