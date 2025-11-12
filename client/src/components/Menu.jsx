import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div className="sticky bottom-2 select-none">
        <div className="h-16 w-106 md:w-148 lg:w-162 bg-white/40 rounded-4xl flex flex-row gap-7 md:gap-16 lg:gap-18 items-center justify-center backdrop-blur-sm">

            <button>
                <Link to="/contacts">
                <img src="/src/assets/contacts-icon.svg" className="size-10 cursor-pointer"></img>
                </Link>
            </button>

            <button>
                <Link to="/">
                <img src="/src/assets/settings-icon.svg" className="size-10 cursor-pointer"></img>
                </Link>
            </button>

            <button>
                <Link to="/">
                <img src="/src/assets/circle-add-orange.svg" className="size-15 cursor-pointer"></img>
                </Link>
            </button>

            <button>
                <Link to="/profile">
                <img src="/src/assets/document-icon.svg" className="size-10 cursor-pointer"></img>
                </Link>
            </button>

            <button>
                <Link to="/profile">
                <img src="/src/assets/user-icon.svg" className="size-10 cursor-pointer"></img>
                </Link>
            </button>

        </div>
        </div>
    )
}