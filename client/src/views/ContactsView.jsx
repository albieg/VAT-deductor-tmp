import { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "../components/Divider";
import { Menu } from "../components/menu";
import { InfoLine } from "../components/InfoLine";
import { Header } from "../components/Header";
import { ContactCard } from "../components/ContactCard";
import { FadeAnimation } from "../utils/FadeAnimation";

export const ContactsView = () => {
    const [ expandedCont, setExpandedCont ] = useState(false);

    const expand = () => {
        setExpandedCont(prev => !prev)
    }

    return (
        <div>
            <FadeAnimation>

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

            { !expandedCont &&
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
            }
            
            
            { expandedCont &&
            <ContactCard
             contactName="Commerciante 1"
             contactRif="J-765432345-2"
             contactEmail="ommerciante1@gmail.com"
             contactPhone="3209876783"
             contactAddress="Calle Orinco Edif. Arbiacenter Piso PB OF PB-3 URB Las Merces Caracas Miranda Zone Postal 1060"
            />     
            }

            </FadeAnimation>
            <Menu />
        </div>
    )
}