import React, { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/menu";
import { ExpandModal } from "../components/ExpandModal";

export const SettingsView = () => {
    const [logoutModal, setLogoutModal] = useState(false);

    const openModal = () => {
        setLogoutModal(prev => !prev)
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <Header>
                <div className="flex flex-row items-center justify-between h-18 px-6 gap-2">
                    <h1 className="uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest">Configuración</h1>
                    <div className="flex gap-2">
                        <h4 className="uppercase text-gray-700">Suitco C.A.</h4>
                    </div>
                </div>
            </Header>

            <div className="p-6 pt-16 flex flex-col items-center">

                <div className="cursor-pointer flex justify-between items-center gap-3 w-80">
                    <h2 className="font-semibold text-[var(--blue-accent)]">Cambiar nombre de usuario</h2>
                    <img src="/src/assets/pencil-icon.svg" className="size-7"/>
                </div>

                <div className="w-90 h-0.5 bg-[var(--blue-accent)]/20 my-8"></div>

                <div className="cursor-pointer flex justify-between items-center gap-3 w-80">
                    <h2 className="font-semibold text-[var(--blue-accent)]">Cambiar contraseña</h2>
                    <img src="/src/assets/key-icon.svg" className="size-7"/>
                </div>

                <div className="w-90 h-0.5 bg-[var(--blue-accent)]/20 my-8"></div>

                <div className="cursor-pointer flex justify-between items-center gap-3 w-80">
                    <h2 className="font-semibold text-[var(--blue-accent)]">Restablecer número de serie</h2>
                    <img src="/src/assets/lock-icon.svg" className="size-7"/>
                </div>

                <div className="w-90 h-0.5 bg-[var(--blue-accent)]/20 my-8 mb-12"></div>
                
                <div onClick={openModal} className="cursor-pointer flex justify-center items-center gap-3 w-60 h-12 rounded-3xl border-2 border-[var(--blue-accent)] shadow-black/10 shadow-xl">
                    <h2 className="font-semibold text-[var(--blue-accent)]">Cerrar sesión</h2>
                    <img src="/src/assets/signOut-icon.svg" className="size-7"/>
                </div>

            </div>

            { logoutModal &&
            <ExpandModal
            onClick={openModal}
            title="¿Confirmas?"
            content={
                <div className="h-full w-full">
                    <button className="w-80 h-12 mb-28 mt-3 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                        Cerrar sesión
                    </button>
                </div>
            }
            />
            }

            <Menu />
        </div>
    )
}