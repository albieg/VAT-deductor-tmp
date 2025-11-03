import React, { useState } from "react";
import { Divider } from "../components/Divider";
import { Menu } from "../components/menu";
import { CardInfo } from "../components/CardInfo";
import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { ExpandModal } from "../components/ExpandModal";

export const ContactsView = () => {
    const [ expandedCont, setExpandedCont ] = useState(false);
    const [ addContact, setAddContact ] = useState(false);
    const [ contactType, setContactType ] = useState(true);

    const expand = () => {
        setExpandedCont(prev => !prev)
    }

    const addButton = () => {
        setAddContact(prev => !prev)
    }

    const contType1 = () => {
        { contactType && setContactType(false)}
    }
    const contType2 = () => {
        { !contactType && setContactType(true)}
    }

    return (
        <div className="flex flex-col items-center h-full">

            <Header>
                <div className="flex justify-start items-center p-4">
                <h1 className="uppercase font-extrabold text-blue-900 text-xl tracking-widest flex items-center gap-2">
                     {expandedCont ? (
                        <>
                            <img src="/src/assets/left-arrow.svg" alt="indietro" className="w-10 h-10" />
                                Indietro
                        </>
                            
                        ) : !addContact ? (
                            "Contatti"
                        ) : (
                            "Nuovo Contatto"
                    )}
                </h1>
                </div>
            </Header>

            { !addContact && !expandedCont &&
            <>
            <div className="py-6 flex flex-col justify-center items-center">

                <Divider label="commercianti" />

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

                <Divider label="commercialisti" />

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

            <button onClick={addButton} className="flex items-center justify-center gap-4 border-1 w-76 border-white uppercase font-bold text-white tracking-wider rounded-4xl py-3 px-8 my-10 mb-16 cursor-pointer">
                <div className="" for="avatar" class="file-upload">Aggiungi Contatto</div>
                <img src="/src/assets/plus-sign.svg" className="size-6" />
            </button>
            </>
            }
            
            
            {   expandedCont &&
                    <div className="h-full w-80 flex flex-col items-center mt-12">
                        <h1 className="text-white text-2xl font-bold mb-18">Commerciante 1</h1>
                        
                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60">R.I.F.</h6>
                        <p className="text-white">J-765432345-2</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60">Email</h6>
                        <p className="text-white">commerciante1@gmail.com</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60">Nº di Telefono</h6>
                        <p className="text-white">3209876783</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>

                        <div className="flex flex-col mb-6">
                        <h6 className="text-white/60">Indirizzo</h6>
                        <p className="text-white ">Calle Orinco Edif. Arbiacenter Piso PB OF PB-3 URB Las Merces Caracas Miranda Zone Postal 1060</p>
                        <div className="w-80 h-0.5 bg-white/20 mt-1"/>
                        </div>
                    </div>
            }


            {
                addContact && 
                    <div className="h-full flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">

                            <div className="flex items-center justify-center bg-white/30 rounded-3xl w-fit h-12 mb-16 shadow-black/10 shadow-xl">
                                <input onClick={contType1} type="radio" id="debito" name="payment" value="debito" className="hidden peer/debito" defaultChecked/>
                                    <label
                                    htmlFor="debito"
                                    className="peer-checked/debito:bg-[var(--lightBlue-accent)] peer-checked/debito:text-white text-white/50 cursor-pointer px-6 py-3 rounded-full transition-all"
                                    >
                                        Commerciante
                                    </label>
                                <input onClick={contType2} type="radio" id="credito" name="payment" value="credito" className="hidden peer/credito" />
                                    <label
                                    htmlFor="credito"
                                    className="peer-checked/credito:bg-[var(--lightBlue-accent)] peer-checked/credito:text-white text-white/50 cursor-pointer px-6 py-3 rounded-full transition-all"
                                    >
                                        Commercialista
                                    </label>
                            </div>

                            <div className="h-72 flex flex-col justify-center items-center gap-6">

                            {!contactType &&
                            <>
                                <form className="text-white p-1 flex flex-row justify-center items-center">
                                    <InputBox width="48" id="name" htmlFor="name" label="Nome"/>
                                    <InputBox width="48" id="rif" htmlFor="rif" label="R.I.F."/>
                                </form>
                                <form className="text-white p-1 flex flex-row justify-center items-center">
                                    <InputBox width="48" id="email" htmlFor="email" label="E-mail"/>
                                    <InputBox width="48" id="phone" htmlFor="number" label="Nº di Telefono"/>
                                </form>
                                <form className="text-white p-1 flex flex-row justify-center items-center">
                                    <InputBox width="102" id="address" htmlFor="address" label="Indirizzo"/>
                                </form>
                            </>
                            }

                            {contactType && 
                            <>
                                <form className="text-white p-1 flex flex-row justify-center items-center">
                                    <InputBox width="48" id="name" htmlFor="name" label="Nome"/>
                                    <InputBox width="48" id="phone" htmlFor="number" label="Nº di Telefono"/>
                                </form>
                                <form className="text-white p-1 flex flex-row justify-center items-center">
                                    <InputBox width="102" id="email" htmlFor="email" label="E-mail"/>
                                </form>
                            </> 
                            }

                            </div>

                            <button onClick={addButton} className="flex items-center justify-center gap-3 w-64 h-12 mb-10 mt-16 bg-[var(--lightBlue-accent)] rounded-4xl text-white uppercase font-bold tracking-wider hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 shadow-xl">
                                    <div>Conferma</div>
                                    <img src="/src/assets/check.svg" className="size-5" />
                            </button>
                        </div>
                    </div>
                
            }

            <Menu />


        </div>
    )
}