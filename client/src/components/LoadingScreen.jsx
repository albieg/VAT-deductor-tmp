import { Hatch } from 'ldrs/react';
import 'ldrs/react/Hatch.css';
import { Logo } from './Logo';


export const LoadingScreen = () => {
    return (
        <div className="h-screen w-screen bg-[var(--lightBlue-background)] flex flex-row justify-center items-center gap-8">
            <Hatch
            size="35"
            stroke="5"
            speed="3"
            color="#ff844b" 
            />
            <Logo></Logo>
        </div>
    )
}