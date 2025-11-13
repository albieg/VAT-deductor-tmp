import React, { useState } from "react";
import { Divider } from "../components/Divider";
import { Menu } from "../components/menu";
import { InfoLine } from "../components/InfoLine";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const ContactsView = () => {
    const [ expandedCont, setExpandedCont ] = useState(false);

    const expand = () => {
        setExpandedCont(prev => !prev)
    }

    return (
        <div className="flex flex-col items-center h-full">

            <Header>
                <div className="flex flex-row justify-between items-center h-20 p-4 px-6">
                <h1 onClick={expandedCont && expand} className={`uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest flex items-center ${expandedCont && "cursor-pointer"}`}>
                     {expandedCont ?
                        <>
                            <img src="/src/assets/goBack-icon.svg" alt="volver" className="w-10 h-10" />
                                Volver
                        </>
                         : 
                            "Contactos"
                    }
                </h1>

                {
                !expandedCont &&
                <Link to="/add-contact">
                    <button className="w-30 mb-2 mt-4 h-10 rounded-4xl uppercase font-bold tracking-wide text-sm text-[var(--orange-accent)] border-2 border-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-lg">
                        Agregar
                    </button>
                </Link>
                }

                </div>
            </Header>

            {!expandedCont &&
            <>
            <div className="py-6 pb-28 flex flex-col justify-center items-center">

                <Divider label="Proveedores" />

                <div onClick={expand} className="cursor-pointer">
                    <InfoLine
                    header="commerciante 1"
                    value="commerciante1@gmail.com"
                    divider
                    />
                </div>

                <InfoLine
                header="commerciante 2"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commerciante 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commerciante 4"
                value="commerciante1@gmail.com"
                divider
                />

                <div className="w-full h-8"></div>

                <Divider label="Asesores Fiscales" />

                <InfoLine
                header="commercialista 1"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 2"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <InfoLine
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />

            </div>

            </>
            }
            
            
            {   expandedCont &&
                    <div className="h-full w-80 flex flex-col items-center mt-12">
                        <h1 className="text-[var(--darkBlue-accent)] text-2xl font-bold mb-18">Commerciante 1</h1>
                        
                        <div className="flex flex-col mb-8">
                        <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">R.I.F.</h6>
                        <p className="text-[var(--blue-accent)] font-semibold">J-765432345-2</p>
                        <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
                        </div>

                        <div className="flex flex-col mb-8">
                        <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Email</h6>
                        <p className="text-[var(--blue-accent)] font-semibold">commerciante1@gmail.com</p>
                        <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
                        </div>

                        <div className="flex flex-col mb-8">
                        <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Nº de Teléfono</h6>
                        <p className="text-[var(--blue-accent)] font-semibold">3209876783</p>
                        <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
                        </div>

                        <div className="flex flex-col mb-8">
                        <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Dirección Fiscal</h6>
                        <p className="text-[var(--blue-accent)] font-semibold">Calle Orinco Edif. Arbiacenter Piso PB OF PB-3 URB Las Merces Caracas Miranda Zone Postal 1060</p>
                        <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
                        </div>
                    </div>
            }

            <Menu />
        </div>
    )
}