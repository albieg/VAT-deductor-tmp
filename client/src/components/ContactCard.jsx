
export const ContactCard = ({contactName, contactRif, contactEmail, contactPhone, contactAddress }) => {
    return (
        <div className="py-6 pb-28 flex flex-col justify-center items-center">
            <h1 className="text-[var(--darkBlue-accent)] text-2xl font-bold mb-18">{contactName}</h1>
                        
            <div className="flex flex-col mb-8 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">R.I.F.</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactRif}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-8 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Email</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactEmail}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-8 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Nº de Teléfono</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactPhone}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>

            <div className="flex flex-col mb-8 w-80">
                <h6 className="text-[var(--blue-accent)]/80 select-none mb-1.5">Dirección Fiscal</h6>
                <p className="text-[var(--blue-accent)] font-semibold">{contactAddress}</p>
                <div className="w-80 h-0.5 bg-[var(--blue-accent)]/10 mt-2"/>
            </div>
        </div>
    )
}