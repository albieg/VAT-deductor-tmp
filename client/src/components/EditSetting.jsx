import { label } from "motion/react-client"
import { EditBox } from "./EditBox"

export const EditSetting = ({onClick, label}) => {
    return(
        <div className="py-6 mt-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-98 z-200 bg-white w-100 h-180 rounded-3xl">
            <div className="flex h-full flex-col justify-between items-center">
                
            <div className="flex flex-row justify-between items-center w-80 select-none  ">
                <h2 className="font-semibold text-[var(--blue-accent)]">{label}</h2>
                <button onClick={onClick} className="cursor-pointer">
                    <img src="/src/assets/cross-orange-icon.svg" className="size-12"/>
                </button>
            </div>

            <div className="h-90 flex flex-col items-center justify-center gap-8">
            <EditBox 
            width="80"
            placeholder="francesco75"
            />
            </div>

            <button className="w-80 h-12 mb-18  rounded-4xl uppercase font-bold tracking-wider text-white bg-[var(--orange-accent)] cursor-pointer transition-all duration-300 ease-in-out shadow-black/10 hover:shadow-amber-600/40 shadow-xl">
                Confirmar
            </button>
            </div>
        </div>
    )
}