import { truncates } from "bcryptjs";
import React from "react";
import { useState } from "react";

export const LoginView = () => {
    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(true)

    const handleSignup = () => {
        setSignup(true)
        setLogin(false)
    }

    const handleLogin = () => {
        setLogin(true)
        setSignup(false)
    }

    const register = async () => {
        try {
            const res = await fetch("http://localhost:5173/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (data.token) {
                console.log("User registered!");
            } else {
                console.error(data.message);
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };


    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-black/12 w-96 sm:w-106 md:w-126 xl:w-156 h-10/12 rounded-3xl shadow-lg p-6 flex flex-col items-center">
            
            <h1 className="text-white text-4xl font-bold p-6 h-36 w-full sm:w-9/12">
                {login ? (
                    <>
                    Log in to <br /> your account
                    </>
                    ) : (
                    <>
                    Sign up to <br /> App Name
                    </>
                )}
            </h1>

            <div className="p-6 pb-32 flex w-full sm:w-9/12 h-115 flex-col justify-end">
            { signup &&
            <form className="mb-8">
                <input className="
                border-b-white/40 border-b-1 focus:border-b-white 
                outline-none ring-0 
                bg-transparent text-white w-full
                transition-all duration-400 ease-in-out
                " 
                type="text" placeholder="Username" name="Username"/>
            </form>
            }

            <form className="mb-8">
                <input className="
                border-b-white/40 border-b-1 focus:border-b-white 
                outline-none ring-0 
                bg-transparent text-white w-full
                transition-all duration-400 ease-in-out
                " 
                type="text" placeholder="Email" name="Email"/>
            </form>

            <form className="mb-12">
                <input className="
                border-b-white/40 border-b-1 focus:border-b-white 
                outline-none ring-0 
                bg-transparent text-white w-full
                transition-all duration-400 ease-in-out
                " 
                type="text" placeholder="Password" name="Password"/>
            </form>

            <button className="w-full h-12 bg-[var(--lightBlue-accent)] rounded-4xl text-white shadow-2xl hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out">
                { login ? "Login" : "Sign up" }
            </button>

            </div>

            <div className="max-w-60 flex justify-center items-center gap-24">
                <button
                onClick={handleLogin}
                className={login ? "uppercase text-sm text-white font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-white/70 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Log in
                </button >

                <button
                onClick={handleSignup}
                className={signup ? "uppercase text-sm text-white font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-white/70 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Sign up
                </button>
            </div>
            </div>
        </div>
    )
}