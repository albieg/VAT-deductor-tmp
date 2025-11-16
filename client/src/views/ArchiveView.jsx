import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/menu";
import { InfoLine } from "../components/InfoLine";
import { FadeAnimation } from "../utils/FadeAnimation";
import { LoadingScreen } from "../components/LoadingScreen";

export const ArchiveView = () => {
    const [ expanded, setExpanded ] = useState(false);

    const expandInvoice = () => {
        setExpanded(prev => !prev)
    }

    return(
        <div>

            <FadeAnimation>

            <Header>
                { !expanded &&
                <div className="flex flex-col items-center justify-center h-26 px-6 gap-3">
                    <h1 className="uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest">Historial de Facturas</h1>
                    <h4 className="uppercase text-gray-700">Suitco C.A.</h4>
                </div>
                }
                { expanded &&
                <div onClick={expandInvoice} className="h-18 px-6 flex items-center uppercase font-extrabold text-[var(--darkBlue-accent)] text-xl tracking-widest">
                    <div className="cursor-pointer flex items-center gap-2">
                        <img src="/src/assets/goBack-icon.svg" alt="volver" className="w-10 h-10" />
                        Volver
                    </div>
                </div>
                }
            </Header>

            { !expanded &&
            
            <div className="py-6 pb-28 flex flex-col justify-center items-center">
                <InfoLine
                onClick={expandInvoice}
                header={<p>Factura <span className="font-bold">#86</span></p>}
                value="26-08-25"
                width="w-40"
                divider
                />
                <InfoLine
                header="Factura #85"
                value="26-08-25"
                width="w-40"
                divider
                />
                <InfoLine
                header="Factura #84"
                value="25-08-25"
                width="w-40"
                divider
                />
                <InfoLine
                header="Factura #83"
                value="25-08-25"
                width="w-40"
                divider
                />
            </div>

            }

            { expanded && 
            <div className="py-6 pb-28 flex flex-col justify-center items-center">
                
            </div>

            }
            
            </FadeAnimation>

            <Menu />

        </div>
    )
}