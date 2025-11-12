import React, { useState } from "react";
import { Divider } from "../components/Divider";
import { Menu } from "../components/menu";
import { CardInfo } from "../components/CardInfo";
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
                <div className="flex justify-start items-center h-18 p-4 px-6">
                <h1 onClick={expandedCont && expand} className={`uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest flex items-center ${expandedCont && "cursor-pointer"}`}>
                     {expandedCont ?
                        <>
                            <img src="/src/assets/arrow-left.svg" alt="volver" className="w-10 h-10" />
                                Volver
                        </>
                         : 
                            "Contactos"
                    }
                </h1>
                </div>
            </Header>

            {!expandedCont &&
            <>
            <div className="py-6 flex flex-col justify-center items-center">

                <Divider label="Proveedores" />

                <div onClick={expand} className="cursor-pointer">
                    <CardInfo
                    header="commerciante 1"
                    value="commerciante1@gmail.com"
                    divider
                    />
                </div>

                <CardInfo
                header="commerciante 2"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commerciante 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commerciante 4"
                value="commerciante1@gmail.com"
                divider
                />

                <div className="w-full h-8"></div>

                <Divider label="Asesores Fiscales" />

                <CardInfo
                header="commercialista 1"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 2"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />
                <CardInfo
                header="commercialista 3"
                value="commerciante1@gmail.com"
                divider
                />

            </div>

            <Link to="/add-contact">
                <button className="w-80 mb-11 mt-6 h-12 rounded-4xl uppercase font-bold tracking-wider text-[var(--orange-accent)] border-2 border-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-lg">
                    Agregar un contacto
                </button>
            </Link>

            </>
            }
            
            
            {   expandedCont &&
                    <div className="h-full w-80 flex flex-col items-center mt-12">
                        <h1 className="text-white text-2xl font-bold mb-18">Commerciante 1</h1>
                        
                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60 select-none">R.I.F.</h6>
                        <p className="text-white">J-765432345-2</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60 select-none">Email</h6>
                        <p className="text-white">commerciante1@gmail.com</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60 select-none">Nº de Teléfono</h6>
                        <p className="text-white">3209876783</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60">Dirección Fiscal</h6>
                        <p className="text-white ">Calle Orinco Edif. Arbiacenter Piso PB OF PB-3 URB Las Merces Caracas Miranda Zone Postal 1060</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>
                    </div>
            }

            <Menu />
        </div>
    )
}