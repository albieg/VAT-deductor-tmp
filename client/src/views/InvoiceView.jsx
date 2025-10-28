import React from "react";
import { BgWrapper } from "../components/BgWrapper";
import { Menu } from "../components/menu";
import { Divider } from "../components/Divider";

export const InvoiceView = () => {

    return (
        <BgWrapper>

            <div className="h-dvh w-full bg-black/30 flex flex-col items-center">
            
            <div className="h-24 w-full flex flex-col justify-center items-center gap-2 bg-white/40">
                <h1 className="uppercase font-extrabold text-blue-900 text-xl tracking-widest">New Invoice</h1>
                <div className="flex gap-2">
                    <h4>Francesco Catanzaro</h4>
                    <h4>•</h4>
                    <h4 className="uppercase">Suitco C.A.</h4>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 border-1 w-64 border-white uppercase font-bold text-white tracking-wider cursor-pointer rounded-4xl p-2 px-8 my-10">
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden />
                <label className="cursor-pointer" for="avatar" class="file-upload">Upload Image</label>
                <img src="/src/assets/file-icon.svg" className="size-6" />
            </div>

            <Divider label="Commerciante" />

            
            <form className="text-white p-3 mt-6 flex flex-row justify-center items-center">
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nome" />
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="R.I.F" />
            </form>

            <form className="text-white p-3 mb-6 flex flex-row justify-center items-center">
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Indirizzo" />
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº di Telefono" />
            </form>

            <Divider label="Fattura" />

            <form className="text-white p-3 mt-6 flex flex-row justify-center items-center">
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº Fattura" />
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº di Controllo" />
            </form>

            <form className="text-white p-3 flex flex-row justify-center items-center">
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Base Imponibile" />
                <input className="bg-white/30 h-10 w-48 rounded-3xl p-4 mx-3" placeholder="Nº di Telefono" />
            </form>

            <form className="text-white mt-4">
                <input className="bg-white/30 h-10 w-102 rounded-3xl p-4 mx-3" placeholder="Totale" />
            </form>

            <button className="w-64 h-12 mt-12 bg-[var(--lightBlue-accent)] rounded-4xl text-white shadow-2xl hover:bg-[var(--blue-accent)] cursor-pointer transition-all duration-300 ease-in-out">
                Genera Ricevuta
            </button>


            <div className="fixed bottom-3">
                <Menu></Menu>
            </div>

            </div>


        </BgWrapper>
    )
};