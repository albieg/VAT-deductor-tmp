import React from "react";

export const LoginView = () => {
    return (
        <div className="w-screen h-screen bg-[url(/src/assets/background.jpg)] bg-cover flex">

            <div className="w-screen h-screen backdrop-blur-xl flex justify-center items-center">

            <div className="w-10/12 h-10/12 bg-black/20 backdrop-blur-md rounded-3xl shadow-lg p-6">
            
            <h1 className="text-white text-3xl font-bold p-6">
                Log in to your account
            </h1>

            <div className="p-6 flex h-115 flex-col justify-center">
            <form className="mb-8">
                <input className="
                border-b-white/60 border-b-1 focus:border-b-white 
                outline-none ring-0 
                bg-transparent text-white w-full
                transition-all duration-400 ease-in-out
                " 
                type="text" placeholder="Email" name="Email"/>
            </form>

            <form className="mb-12">
                <input className="
                border-b-white/60 border-b-1 focus:border-b-white 
                outline-none ring-0 
                bg-transparent text-white w-full
                transition-all duration-400 ease-in-out
                " 
                type="text" placeholder="Password" name="Password"/>
            </form>

            <button className="w-full h-12 bg-[var(--lightBlue-accent)] rounded-4xl text-white shadow-2xl hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out">Login</button>
            </div>

            <div className="px-20 flex justify-between text-white">
                <button className="uppercase text-sm font-bold hover:underline underline-offset-6">
                    Log in
                </button >
                <button className="uppercase text-sm font-bold hover:underline underline-offset-6">
                    Sign up
                </button>
            </div>


            </div>
            </div>
        </div>
    )
}