import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";

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
                
                <div className="flex items-center justify-center gap-4 border-1 w-64 h-12 border-white uppercase font-bold text-white tracking-wider cursor-pointer rounded-4xl px-6 mb-4 mt-9 shadow-black/10 shadow-xl">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden />
                    <label for="avatar" className="file-upload cursor-pointer">Upload Image</label>
                    <img src="/src/assets/file-icon.svg" className="size-6" />
                </div>
                
                <Divider label="Commerciante" />

                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="name" htmlFor="id" label="Nome"/>
                    <InputBox width="48" id="rif" htmlFor="rif" label="R.I.F"/>
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="address" htmlFor="address" label="Indirizzo"/>
                    <InputBox width="48" id="phone" htmlFor="number" label="Nº di Telefono"/>
                </form>
                
                <Divider label="Fattura" />
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="receipt_num" htmlFor="receipt_num" label="Nº Fattura"/>
                    <InputBox width="48" id="control_num" htmlFor="control_num" label="Nº di Controllo"/>
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="taxable_base" htmlFor="taxable_base" label="Base Imponibile"/>
                    <InputBox width="48" id="vat_percentage" htmlFor="vat_percentage" label="VAT 16%"/>
                </form>
                
                <form className="text-white p-1 flex flex-col justify-center items-center">
                    <InputBox width="102" id="total" htmlFor="total" label="Totale"/>
                </form>
                
                <button onClick={expandForm} className="cursor-pointer p-1 text-white">
                    <div className={`border-1 p-2 w-102 h-12 rounded-3xl flex items-center justify-center gap-3 shadow-black/10 shadow-xl ${expandedForm ? "border-white" : "border-white/30"}`}>
                        <h3>Aggiungi Voci</h3>
                        <img src="/src/assets/plus-sign.svg" className={`size-6 transform transition-transform duration-400 ${expandedForm ? "rotate-45" : "rotate-0"}`} />
                    </div>
                </button>

                { expandedForm &&
                
                <div className="flex flex-col gap-5">

                    <form className="text-white p-1 flex flex-col justify-center items-center">
                        <InputBox width="102" id="vat_free" htmlFor="vat_free" label="Compras si Derecho a Crédito I.V.A"
                        />
                    </form>
                    
                    <Divider label="Nota di Debito / Credito" />
                    
                    <form className="text-white p-1 flex flex-row justify-center items-center gap-6">
                        
                        <InputBox width="48" id="ref_number" htmlFor="ref_number" label="Nº di Referenza"/>

                    <div className="flex items-center justify-center bg-white/30 rounded-3xl w-48 h-12 shadow-black/10 shadow-xl">
                        <input onClick={handleText} type="radio" id="debito" name="payment" value="debito" className="hidden peer/debito" defaultChecked/>
                        <label
                        htmlFor="debito"
                        className="peer-checked/debito:bg-[var(--lightBlue-accent)] peer-checked/debito:text-white text-white/50 cursor-pointer px-6 py-3 rounded-full transition-all"
                        >
                            Debito
                        </label>
                        <input onClick={handleText} type="radio" id="credito" name="payment" value="credito" className="hidden peer/credito" />
                        <label
                        htmlFor="credito"
                        className="peer-checked/credito:bg-[var(--lightBlue-accent)] peer-checked/credito:text-white text-white/50 cursor-pointer px-6 py-3 rounded-full transition-all"
                        >
                            Credito
                        </label>
                    </div>
                    </form>

                    <form className="text-white p-2">
                        <InputBox width="102" id="debt/cred_note" htmlFor="debt/cred_note" label={`Quota di ${debtChecked ? "Debito" : "Credito"}`}
                        />
                    </form>

                </div>
                }
                
                <button className="w-64 h-12 mb-10 mt-3 bg-[var(--lightBlue-accent)] rounded-4xl text-white uppercase font-bold tracking-wider hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 shadow-xl">
                    Genera Ricevuta
                </button>

            </div>

            <Menu />

        </div>
    )
};