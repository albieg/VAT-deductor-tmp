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
        <div className="w-full min-h-screen flex flex-col items-center justify-between select-none">
            
            <Header>
                <div className="flex flex-row items-center justify-between h-18 px-6 gap-2">
                <h1 className="uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest">Nueva factura</h1>
                <div className="flex gap-2">
                    <h4 className="uppercase text-gray-700">Suitco C.A.</h4>
                </div>
                </div>
            </Header>

            <div className="flex flex-col justify-center items-center gap-6">
                
                <div className="border-2 w-64 h-12 border-[var(--blue-accent)]/80 uppercase font-bold text-[var(--blue-accent)] tracking-wider cursor-pointer rounded-4xl px-6 mb-3 mt-7 shadow-black/10 shadow-xl">
                    <input type="file" id="receipt" name="receipt" accept="image/png, image/jpeg" hidden />
                    <label htmlFor="receipt" className="file-upload cursor-pointer flex items-center justify-center gap-2 w-full h-full">
                    Cargar recibo
                    <img src="/src/assets/receipt-icon.svg" className="size-8" />
                    </label>
                </div>
                
                <Divider label="Proveedor" />

                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="name" htmlFor="id" label="Nombre"/>
                    <InputBox width="48" id="rif" htmlFor="rif" label="R.I.F"/>
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="address" htmlFor="address" label="Dirección Fiscal"/>
                    <InputBox width="48" id="phone" htmlFor="number" label="Nº di Telefono"/>
                </form>
                
                <Divider label="Factura" />
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="receipt_num" htmlFor="receipt_num" label="Nº de Factura"/>
                    <InputBox width="48" id="control_num" htmlFor="control_num" label="Nº de Control"/>
                </form>
                
                <form className="text-white p-1 flex flex-row justify-center items-center">
                    <InputBox width="48" id="taxable_base" htmlFor="taxable_base" label="Base Imponible"/>
                    <InputBox width="48" id="vat_percentage" htmlFor="vat_percentage" label="VAT 16%"/>
                </form>
                
                <form className="text-white p-1 flex flex-col justify-center items-center">
                    <InputBox width="102" id="total" htmlFor="total" label="Total Compras"/>
                </form>
                
                <button onClick={expandForm} className="cursor-pointer p-1 text-[var(--blue-accent)]">
                    <div className={`border-2 p-2 w-102 h-12 rounded-3xl flex items-center justify-center gap-3 shadow-black/10 shadow-xl ${expandedForm ? "border-[var(--orange-accent)]" : "border-[var(--blue-accent)]/30"}`}>
                        <h3>Añadir más Detalles</h3>
                        <img src="/src/assets/cross-icon.svg" className={`size-7 transform transition-transform duration-400 ${expandedForm ? "rotate-0" : "rotate-45"}`} />
                    </div>
                </button>

                { expandedForm &&
                
                <div className="flex flex-col gap-5">

                    <form className="text-white p-1 flex flex-col justify-center items-center">
                        <InputBox width="102" id="vat_free" htmlFor="vat_free" label="Compras si Derecho a Crédito I.V.A"
                        />
                    </form>
                    
                    <Divider label="Nota de Débito / Crédito" />
                    
                    <form className="text-white p-1 flex flex-row justify-center items-center gap-6">
                        
                        <InputBox width="48" id="ref_number" htmlFor="ref_number" label="Nº Fact. Afectada"/>

                    <div className="flex items-center justify-center bg-[white/10] border-2 border-[var(--lightBlue-accent)] rounded-3xl w-48 h-12 shadow-black/10 shadow-xl">
                        <input onClick={handleText} type="radio" id="debito" name="payment" value="debito" className="hidden peer/debito" defaultChecked/>
                        <label
                        htmlFor="debito"
                        className="peer-checked/debito:bg-[var(--lightBlue-accent)] peer-checked/debito:text-white text-[var(--lightBlue-accent)] cursor-pointer px-6 py-3 rounded-full transition-all"
                        >
                            Débito
                        </label>
                        <input onClick={handleText} type="radio" id="credito" name="payment" value="credito" className="hidden peer/credito" />
                        <label
                        htmlFor="credito"
                        className="peer-checked/credito:bg-[var(--lightBlue-accent)] peer-checked/credito:text-white text-[var(--lightBlue-accent)] cursor-pointer px-6 py-3 rounded-full transition-all"
                        >
                            Crédito
                        </label>
                    </div>
                    </form>

                    <form className="text-white p-2">
                        <InputBox width="102" id="debt/cred_note" htmlFor="debt/cred_note" label={`Nota de ${debtChecked ? "Débito" : "Crédito"}`}
                        />
                    </form>

                </div>
                }
                
                <button className="w-80 h-12 mb-28 mt-3 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                    Generar factura
                </button>

            </div>

            <Menu />

        </div>
    )
};