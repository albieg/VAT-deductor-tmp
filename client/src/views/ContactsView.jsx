import React from "react";
import { Divider } from "../components/Divider";
import { Menu } from "../components/menu";
import { CardInfo } from "../components/CardInfo";
import { Header } from "../components/Header";

export const ContactsView = () => {
    return (
        <div className=" flex flex-col items-center">

            <Header>
                <div className="flex justify-center items-center p-8">
                <h1 className="uppercase font-extrabold text-blue-900 text-xl tracking-widest">Contatti</h1>
                </div>
            </Header>

            <div className="py-6 flex flex-col justify-center items-center">

                <Divider label="commercianti" />

                <CardInfo
                header="commerciante 1"
                value="commerciante1@gmail.com"
                divider
                />
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

            <button className="flex items-center justify-center gap-4 border-1 w-76 border-white uppercase font-bold text-white tracking-wider rounded-4xl p-2 px-8 my-10 mb-30 cursor-pointer">
                <div className="" for="avatar" class="file-upload">Aggiungi Contatto</div>
                <img src="/src/assets/plus-sign.svg" className="size-6" />
            </button>

            <Menu />
        </div>
    )
}