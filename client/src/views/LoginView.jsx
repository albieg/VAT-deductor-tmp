import { useState } from "react";
import { Logo } from "../components/Logo";
import { InputBox } from "../components/InputBox";


export const LoginView = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [signupUI, setSignupUI] = useState(false)
    const [loginUI, setLoginUI] = useState(true)

    const handleSignup = () => {
        setSignupUI(true)
        setLoginUI(false)
        setForm({ username: "", email: "", password: "" });
    }

    const handleLogin = () => {
        setLoginUI(true)
        setSignupUI(false)
        setForm({ username: "", email: "", password: "" });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const register = async () => {
        try {
            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (data.token) {
                console.log("User registered!");
                localStorage.setItem("token", data.token);
            } else {
                console.error(data.message);
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const login = async () => {
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (data.token) {
                console.log("User logged in!");
                localStorage.setItem("token", data.token);
            } else {
                console.error(data.message);
            }
        } catch (err) {
                console.error("Error:", err);
        }
    };


    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-white/30 w-96 sm:w-106 md:w-126 xl:w-156 h-10/12 rounded-3xl shadow-gray-500/50 shadow-xl p-6 flex flex-col items-center">
            
            <h1 className="text-[var(--darkBlue-accent)] text-xl font-medium pt-6 mb-6 h-36 w-80 flex flex-col gap-2">
                {loginUI ? (
                    <>
                    Inicie sesión en su cuenta de 
                    </>
                    ) : (
                    <>
                    Cree una cuenta de
                    </>
                )}
                <Logo />
            </h1>

            <div className="p-6 pb-28 flex w-full sm:w-9/12 h-119 flex-col justify-end items-center gap-6">
                { signupUI &&
                <InputBox value={form.username} onChange={handleChange} width="80" id="username" htmlFor="username" label="Nombre de Usuario"/>
                }

                <InputBox value={form.email} onChange={handleChange} width="80" id="email" htmlFor="email" label="Email"/>

                <InputBox value={form.password} onChange={handleChange} width="80" id="password" htmlFor="password" label="Contraseña"/>
                
                <button onClick={loginUI ? login : register} className="w-80 h-12 mb-9 mt-6 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                    { loginUI ? "Iniciar Sesión" : "Registrarse" }
                </button>

                { loginUI &&
                <button className="text-[var(--blue-accent)]/60 hover:text-[var(--blue-accent)] text-sm cursor-pointer">
                    ¿Olvidó su contraseña?
                </button>
                }

            </div>

            <div className="max-w-80 flex justify-center items-center gap-14">
                <button
                onClick={handleLogin}
                className={loginUI ? "uppercase text-sm text-[var(--darkBlue-accent)] font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-[var(--blue-accent)]/60 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Iniciar sesión
                </button >

                <button
                onClick={handleSignup}
                className={signupUI ? "uppercase text-sm text-[var(--darkBlue-accent)] font-bold underline hover:underline underline-offset-6 transition-all duration-300 ease-in-out" : "uppercase text-sm text-[var(--blue-accent)]/60 font-medium hover:underline underline-offset-6 transition-all duration-300 ease-in-out"}
                >
                    Registrarse
                </button>

            </div>
            </div>
        </div>
    )
}