import React, { useState } from "react";
import { BgWrapper } from "../components/BgWrapper";
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { CardInfo } from "../components/CardInfo";
import { ExpandModal } from "../components/ExpandModal";


export const ProfileView = () => {
    const [ expandedAddress, setExpandedAddress ] = useState(false);
    const [ expandedEmail, setExpandedEmail ] = useState(false);

    const expandAddress = () => {
        setExpandedAddress(prev => !prev)
    }

    const expandEmail = () => {
        setExpandedEmail(prev => !prev)
    }

    

    return (
        <BgWrapper>
            <div className="h-dvh w-full bg-black/30 flex flex-col items-center">

            <div className="h-36 w-full flex flex-col justify-center items-center gap-2 bg-white/40">
                
                <img src="/src/assets/profile-pic.jpg" className="size-16 rounded-4xl object-cover "></img>
                
                <div className="flex gap-2">
                    <h4>Francesco Catanzaro</h4>
                    <h4>•</h4>
                    <h4 className="uppercase">Suitco C.A.</h4>
                </div>
            </div>

            <div className="bg-white/25 mt-6 rounded-2xl h-142 w-106 flex flex-col justify-center">
            
            <Divider label="Organizzazione" />
            <CardInfo header="R.I.F" value="J-31169561-3"/>
            <CardInfo header="Nome" value="Suito c.a."/>
            <CardInfo onClick={expandAddress} header="Indirizzo" value="CALLE ORINOCO EDIF ARBICENTER PISO PB OF PB-3 URB LAS MERCEDES CARACAS MIRANDA ZONA POSTAL 1060" />
            <CardInfo header="Nº di Telefono" value="Suito c.a."/>
            <CardInfo header="Ritenuta %" value="100%"/>
            <Divider label="Agente" />
            <CardInfo header="Nome" value="Albie Guerriero"/>
            <CardInfo onClick={expandEmail} header="Email" value="francescocatanzaro@gmail.com" />

            </div>

            <button className="flex items-center justify-center gap-4 border-1 w-64 border-white uppercase font-bold text-white tracking-wider rounded-4xl p-2 px-8 my-10 cursor-pointer">
                <div className="" for="avatar" class="file-upload">Modifica Info</div>
                <img src="/src/assets/pen.svg" className="size-4" />
            </button>


            <div className="fixed bottom-3">
                    <Menu></Menu>
            </div>

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

        </BgWrapper>
        
    )
}