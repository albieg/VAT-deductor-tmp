import { useState } from "react"
import { Divider } from "./Divider";
import { FadeAnimation } from "../utils/FadeAnimation";
import { SlideRightAnimation } from "../utils/SlideRightAnimation";


export const ContactCard = ({onClick, contactName, contactRif, contactEmail, contactPhone, contactAddress }) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(prev => !prev)
    };

    return (
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-96 z-200">
            { !edit &&
            <SlideRightAnimation>
            <div className="py-6 mt-6 flex flex-col justify-center items-center bg-white w-100 h-180 rounded-3xl">

            <div className="flex flex-row justify-between items-center w-80 select-none mb-4">
                 <h3 className="text-xs text-[var(--blue-accent)] border-2 py-1 px-2 rounded-3xl">Proveedor</h3>
                 <button onClick={onClick} className="cursor-pointer">
                    <img src="/src/assets/cross-orange-icon.svg" className="size-12"/>
                 </button>
            </div>
  
            <h1 className="text-[var(--darkBlue-accent)] text-2xl font-bold mb-4">{contactName}</h1>

            <div className="flex flex-col mb-8 mt-6 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">R.I.F.</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactRif}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-6 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Email</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactEmail}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-6 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Nº de Teléfono</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactPhone}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-6 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Dirección Fiscal</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactAddress}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <button onClick={handleEdit} className="w-80 h-12 mb-10 mt-6 rounded-4xl uppercase font-bold tracking-wider text-[var(--orange-accent)] border-2 border-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-lg">
                Editar Contacto
            </button>
            </div>
            </SlideRightAnimation>
            }

            { edit &&
            <FadeAnimation>
            <div className="py-6 mt-6 flex flex-col justify-center items-center bg-white w-100 h-180 rounded-3xl">
                
                <div className="flex flex-row justify-between items-center w-80 select-none mb-4">
                 <h3 className="text-xs text-[var(--orange-accent)] border-2 py-1 px-3 rounded-3xl">Delete</h3>
                 <button onClick={onClick} className="cursor-pointer">
                    <img src="/src/assets/cross-orange-icon.svg" className="size-12"/>
                 </button>
            </div>

                <button onClick={handleEdit} className="w-80 h-12 mb-10 mt-5 rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                    Confirmar
                </button>
            </div>
            </FadeAnimation>
            }
        </div>
    )
}