import { useState } from "react";
import { Logo } from "../components/Logo";
import { InputBox } from "../components/InputBox";


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
            <div className="bg-white/10 w-96 sm:w-106 md:w-126 xl:w-156 h-10/12 rounded-3xl shadow-gray-500/50 shadow-xl p-6 flex flex-col items-center">
            
            <h1 className="text-[var(--darkBlue-accent)] text-3xl font-bold pt-6 mb-8 h-36 w-80">
                {login ? (
                    <>
                    Inicie sesión <br /> en su cuenta de <br /> <Logo/> 
                    </>
                    ) : (
                    <>
                    Cree una cuenta de <br /> <Logo/>
                    </>
                )}
            </h1>

            <div className="p-6 pb-32 flex w-full sm:w-9/12 h-119 flex-col justify-end items-center gap-6">
                { signup &&
                <InputBox width="80" id="username" htmlFor="username" label="Nombre de Usuario"/>
                }

                <InputBox width="80" id="email" htmlFor="email" label="Email"/>

                <InputBox width="80" id="password" htmlFor="password" label="Contraseña"/>
                
                <button className="w-80 h-12 mb-9 mt-6 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                    { login ? "Iniciar Sesión" : "Registrarse" }
                </button>

                { login &&
                <button className="text-[var(--blue-accent)]/60 hover:text-[var(--blue-accent)] text-sm cursor-pointer">
                    ¿Olvidó su contraseña?
                </button>
                }

            </div>

            <div className="max-w-80 flex justify-center items-center gap-14">
                <button
                onClick={handleLogin}
                className={login ? "uppercase text-sm text-[var(--darkBlue-accent)] font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-[var(--blue-accent)]/60 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Iniciar sesión
                </button >

                <button
                onClick={handleSignup}
                className={signup ? "uppercase text-sm text-[var(--darkBlue-accent)] font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-[var(--blue-accent)]/60 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Registrarse
                </button>

            </div>
            </div>
        </div>
    )
}