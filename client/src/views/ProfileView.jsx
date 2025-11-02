import React, { useState } from "react";
import { motion } from "motion/react"
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { CardInfo } from "../components/CardInfo";
import { ExpandModal } from "../components/ExpandModal";
import { Header } from "../components/Header";
import { EditBox } from "./EditBox";


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
        <div className="w-full h-screen  flex flex-col items-center">

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
            <div className="bg-white/25 mt-6 rounded-2xl h-142 w-106 flex flex-col justify-center">
                
                <Divider label="Organizzazione" />
                
                <CardInfo
                header="R.I.F"
                value="J-31169561-3"
                />
                <CardInfo
                header="Nome"
                value="Suito c.a."
                />
                <CardInfo
                onClick={expandAddress}
                header="Indirizzo"
                value="CALLE ORINOCO EDIF ARBICENTER PISO PB OF PB-3 URB LAS MERCEDES CARACAS MIRANDA ZONA POSTAL 1060"
                />
                <CardInfo
                header="Nº di Telefono"
                value="Suito c.a."
                />
                <CardInfo
                header="Ritenuta %"
                value="100%"
                />

                <Divider label="Agente"/>

                <CardInfo
                header="Nome"
                value="Francesco Catanzaro"
                />
                <CardInfo
                onClick={expandEmail}
                header="Email"
                value="francescocatanzaro@gmail.com"
                />

            </div>

            <button onClick={editButton} className="flex items-center justify-center gap-4 border-1 w-64 h-12 border-white uppercase font-bold text-white tracking-wider rounded-4xl p-2 px-8 my-10 cursor-pointer">
                <div className="" for="avatar" class="file-upload">Modifica Info</div>
                <img src="/src/assets/pen.svg" className="size-4" />
            </button>

            </>
            }


            { editInfo &&

            <>

            <div className="h-full flex flex-col justify-center items-center gap-7 mt-9">

                <Divider label="Organizzazione" />
                
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="R.I.F" placeholder="J-31169561-3" />
                    <EditBox width="48" label="Nome" placeholder="SUITCO C.A." />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="102" label="Indirizzo Fiscale" placeholder="J-31169561-3" />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="Numero" placeholder="3547382938" />
                    <EditBox width="48" label="Ritenuta %" placeholder="100%" />
                </form>

                <Divider label="Agente" />

                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="48" label="Nome" placeholder="Francesco" />
                    <EditBox width="48" label="Cognome" placeholder="Catanzaro" />
                </form>
                <form className="text-white flex flex-row justify-center items-center">
                    <EditBox width="102" label="E-mail" placeholder="francescocatanzaro@gmail.com" />
                </form>


                <button onClick={editButton} className="flex items-center justify-center gap-3 w-64 h-12 mb-10 mt-3 bg-[var(--lightBlue-accent)] rounded-4xl text-white uppercase font-bold tracking-wider hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 shadow-xl">
                    <div>Conferma</div>
                    <img src="/src/assets/check.svg" className="size-5" />
                </button>


            </div>
            </>


            }


            
            <Menu></Menu>

            {
                expandedAddress &&
                <ExpandModal 
                onClick={expandAddress}
                title="Indirizzo"
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