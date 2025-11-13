import React, { useState } from "react";
import { motion } from "motion/react"
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { InfoLine } from "../components/InfoLine";
import { ExpandModal } from "../components/ExpandModal";
import { Header } from "../components/Header";
import { EditBox } from "../components/EditBox";


export const ProfileView = () => {
    const [ expandedAddress, setExpandedAddress ] = useState(false);
    const [ expandedEmail, setExpandedEmail ] = useState(false);
    const [ editInfo, setEditInfo ] = useState(false);

    const expandAddress = () => {
        setExpandedAddress(prev => !prev)
    }

    const expandEmail = () => {
        setExpandedEmail(prev => !prev)
    }

    const editButton = () => [
        setEditInfo(prev => !prev)
    ]
     

    return (
        <div className="w-full min-h-screen flex flex-col items-center">

            <Header>
                <div className="flex flex-col items-center justify-center p-6 gap-4">
                <img src="/src/assets/profile-pic.jpg" className="size-16 rounded-4xl object-cover "></img>
                <div className="flex gap-2">
                    <h4>Francesco Catanzaro</h4>
                    <h4>•</h4>
                    <h4 className="uppercase">Suitco C.A.</h4>
                </div>
                </div>
            </Header>


            { !editInfo &&

            <>
            <div className="bg-[var(--blue-accent)]/20 mt-6 rounded-2xl h-142 w-106 flex flex-col justify-center">
                
                <Divider label="Empresa" />
                
                <InfoLine
                header="R.I.F"
                value="J-31169561-3"
                />
                <InfoLine
                header="Nombre"
                value="Suito c.a."
                />
                <InfoLine
                onClick={expandAddress}
                header="Dirección"
                value="CALLE ORINOCO EDIF ARBICENTER PISO PB OF PB-3 URB LAS MERCEDES CARACAS MIRANDA ZONA POSTAL 1060"
                />
                <InfoLine
                header="Nº de Teléfono"
                value="Suito c.a."
                />
                <InfoLine
                header="Retención %"
                value="100%"
                />

                <Divider label="Agente"/>

                <InfoLine
                header="Nombre"
                value="Francesco Catanzaro"
                />
                <InfoLine
                onClick={expandEmail}
                header="Email"
                value="francescocatanzaro@gmail.com"
                />

            </div>

            <button onClick={editButton} className="w-80 h-12 mb-10 mt-6 rounded-4xl uppercase font-bold tracking-wider text-[var(--orange-accent)] border-2 border-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-lg">
                Editar información
            </button>

            </>
            }


            { editInfo &&
            <>
            <div className="h-full flex flex-col justify-center items-center gap-7 mt-9">

                <Divider label="Empresa" />
                
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="R.I.F" placeholder="J-31169561-3" />
                    <EditBox width="48" label="Nombre" placeholder="SUITCO C.A." />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="102" label="Dirección Fiscal" placeholder="J-31169561-3" />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="Nº de Teléfono" placeholder="3547382938" />
                    <EditBox width="48" label="Retención %" placeholder="100%" />
                </form>

                <Divider label="Agente" />

                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="Nombre" placeholder="Francesco" />
                    <EditBox width="48" label="Apellidos" placeholder="Catanzaro" />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="102" label="Email" placeholder="francescocatanzaro@gmail.com" />
                </form>


                <button onClick={editButton} className="w-80 h-12 mb-10 mt-3 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                    Confirmar
                </button>

            </div>
            </>
            }

            
            <Menu/>


            {
                expandedAddress &&
                <ExpandModal 
                onClick={expandAddress}
                title="Dirección"
                content="CALLE ORINOCO EDIF ARBICENTER PISO PB OF PB-3 URB LAS MERCEDES CARACAS MIRANDA ZONA POSTAL 1060"
                />
            }

            {
                expandedEmail &&
                <ExpandModal
                onClick={expandEmail}
                title="Email"
                content="francescocatanzaro@gmail.com"
                />
            }

        </div>  
    )
}