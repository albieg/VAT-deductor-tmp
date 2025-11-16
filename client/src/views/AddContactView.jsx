import { useState } from "react";
import { Link } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Header } from "../components/Header";
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { FadeAnimation } from "../utils/FadeAnimation";

export const AddContactView = () => {
    const [ contactType, setContactType ] = useState("vendor");

    const vendorToggle = () => {
        setContactType("vendor")
    }

    const accountantToggle = () => {
        setContactType("accountant")
    }

    return(
        <div>
            <FadeAnimation>
        <Header>
            <div className="flex justify-start items-center h-18 p-4 px-6">
                <Link to="/contacts">
                    <h1 className="uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest flex items-center cursor-pointer">
                        <img src="/src/assets/goBack-icon.svg" alt="volver" className="w-10 h-10" />
                        Volver
                    </h1>
                </Link>
            </div>
        </Header>

        <div className="h-fit flex flex-col justify-center items-center select-none mt-22">

            <Divider label="Nuevo Contacto" />

            <div className="flex flex-col justify-center items-center mt-14">
        
                <div className="flex items-center justify-center bg-[white/10] border-2 border-[var(--lightBlue-accent)] rounded-3xl w-80 h-12 mb-10 shadow-black/10 shadow-xl">
                    <input onClick={vendorToggle} type="radio" id="vendor" name="contact" value="vendor" className="hidden peer/vendor" defaultChecked/>
                    <label
                    htmlFor="vendor"
                    className="peer-checked/vendor:bg-[var(--lightBlue-accent)] peer-checked/vendor:text-white text-[var(--lightBlue-accent)] cursor-pointer px-6 py-3 w-40 text-center rounded-full transition-all"
                    >
                        Proveedor
                    </label>

                    <input onClick={accountantToggle} type="radio" id="accountant" name="contact" value="accountant" className="hidden peer/accountant" />
                    <label
                    htmlFor="accountant"
                    className="peer-checked/accountant:bg-[var(--lightBlue-accent)] peer-checked/accountant:text-white text-[var(--lightBlue-accent)] cursor-pointer px-6 py-3 w-40 text-center rounded-full transition-all"
                    >
                        Asesor Fiscal
        
                    </label>
                </div>
        
                <div className="h-72 flex flex-col justify-center items-center gap-6">
        
                    { contactType === "vendor" &&
                        <div>
                            <form className="text-white p-4 flex flex-row justify-center items-center">
                                <InputBox width="48" id="name" htmlFor="name" label="Nombre"/>
                                <InputBox width="48" id="rif" htmlFor="rif" label="R.I.F."/>
                            </form>

                            <form className="text-white p-4 flex flex-row justify-center items-center">
                                <InputBox width="48" id="email" htmlFor="email" label="Email"/>
                                <InputBox width="48" id="phone" htmlFor="number" label="Nº de Teléfono"/>
                            </form>

                            <form className="text-white p-4 flex flex-row justify-center items-center">
                                <InputBox width="102" id="address" htmlFor="address" label="Dirección Fiscal"/>
                            </form>
                        </div>
                    }
        
                    { contactType === "accountant" && 
                        <div>
                            <form className="text-white p-4 flex flex-row justify-center items-center">
                                <InputBox width="48" id="name" htmlFor="name" label="Nombre"/>
                                <InputBox width="48" id="phone" htmlFor="number" label="Nº de Teléfono"/>
                            </form>

                            <form className="text-white p-4 flex flex-row justify-center items-center">
                                <InputBox width="102" id="email" htmlFor="email" label="Email"/>
                            </form>
                        </div> 
                    }
        
                </div>

                <Link to="/contacts">
                    <button className="w-80 h-12 mb-42 mt-8 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                        Confirmar
                    </button>
                </Link>
            </div>

        </div>
        </FadeAnimation>
        <Menu/>
        </div>
    )
}