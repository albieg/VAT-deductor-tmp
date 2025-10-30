import React, { useState } from "react";
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";

export const InvoiceView = () => {
    const [ expandedForm, setExpandedForm ] = useState(false)
    const [ debtChecked, setDebtChecked ] = useState(true)

    const expandForm = () => {
        setExpandedForm(prev => !prev)
    }

    const handleText = () => {
        setDebtChecked(prev => !prev)
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            
            <Header>
                <div className="flex flex-row items-center justify-between h-18 px-6 gap-2">
                <h1 className="uppercase font-extrabold text-[var(--blue-accent)] text-xl tracking-widest">Nuova Ricevuta</h1>
                <div className="flex gap-2">
                    <h4 className="uppercase">Suitco C.A.</h4>
                </div>
                </div>
            </Header>

            <div className="flex flex-col justify-center items-center gap-6">
                
                <div className="flex items-center justify-center gap-4 border-1 w-64 border-white uppercase font-bold text-white tracking-wider cursor-pointer rounded-4xl p-2 px-8 mb-3 mt-3">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden />
                    <label for="avatar" className="file-upload cursor-pointer">Upload Image</label>
                    <img src="/src/assets/file-icon.svg" className="size-6" />
                </div>
                
                <Divider label="Commerciante" />

                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nome" />
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="R.I.F" />
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Indirizzo" />
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº di Telefono" />
                </form>
                
                <Divider label="Fattura" />
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº Fattura" />
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº di Controllo" />
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Base Imponibile" />
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="VAT 16%" />
                </form>
                
                <form className="text-white p-1 flex flex-col justify-center items-center">
                    <input className="bg-white/30 h-10 w-102 rounded-3xl p-4 mx-3" placeholder="Totale" />
                </form>
                
                <button onClick={expandForm} className="cursor-pointer p-1 text-white">
                    <div className={`border-1 p-2 w-102 rounded-3xl flex items-center justify-center gap-3 ${expandedForm ? "border-white" : "border-white/30"}`}>
                        <h3>Aggiungi Voci</h3>
                        <img src="/src/assets/plus-sign.svg" className={`size-6 transform transition-transform duration-400 ${expandedForm ? "rotate-45" : "rotate-0"}`} />
                    </div>
                </button>

                { expandedForm &&
                
                <div className="flex flex-col gap-5">

                    <form className="text-white p-1 flex flex-col justify-center items-center">
                    <input className="bg-white/30 h-10 w-102 rounded-3xl p-4 mx-3" placeholder="Compras si Derecho a Crédito I.V.A." />
                    </form>
                    
                    <Divider label="Nota di Debito / Credito" />
                    
                    <form className="text-white p-1 flex flex-row justify-center items-center gap-6">
                        
                    <input className="bg-white/30 h-10 w-48 rounded-3xl p-4" placeholder="Nº di Referenza" />

                    <div className="flex items-center justify-center bg-white/30 rounded-3xl w-48">
                        <input onClick={handleText} type="radio" id="debito" name="payment" value="debito" className="hidden peer/debito" defaultChecked/>
                        <label
                        htmlFor="debito"
                        className="peer-checked/debito:bg-[var(--lightBlue-accent)] peer-checked/debito:text-white text-white/50 cursor-pointer px-6 py-2 rounded-full transition-all"
                        >
                            Debito
                        </label>
                        <input onClick={handleText} type="radio" id="credito" name="payment" value="credito" className="hidden peer/credito" />
                        <label
                        htmlFor="credito"
                        className="peer-checked/credito:bg-[var(--lightBlue-accent)] peer-checked/credito:text-white text-white/50 cursor-pointer px-6 py-2 rounded-full transition-all"
                        >
                            Credito
                        </label>
                    </div>
                    </form>

                    <form className="text-white p-2">
                        <input className="bg-white/30 h-10 w-102 rounded-3xl p-4 mx-3" placeholder={`Quota di ${debtChecked ? "Debito" : "Credito"}`} />
                    </form>

                </div>
                }
                
                <button className="w-64 h-12 mb-6 mt-3 bg-[var(--lightBlue-accent)] rounded-4xl text-white shadow-2xl hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out">
                    Genera Ricevuta
                </button>

            </div>

            <Menu />

        </div>
    )
};