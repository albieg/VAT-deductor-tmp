import React from "react";
import { BgWrapper } from "../components/BgWrapper";

export const InvoiceView = () => {
    
    const input = document.getElementById('avatar');
    const fileName = document.getElementById('file-name');
    
    input.addEventListener('change', () => {
        fileName.textContent = input.files.length > 0 ? input.files[0].name : 'No file chosen';
    });

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

            <div className="flex items-center justify-center gap-4 border-1 w-64 border-white uppercase font-bold text-white tracking-wider rounded-4xl p-3 px-8 my-10">
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" hidden />
                <label className="" for="avatar" class="file-upload">Upload Image</label>
                <img src="/src/assets/fileIcon.svg" className="size-6" />
            </div>

            <div className="flex justify-center items-center">
                <div className="w-40 h-0.5 bg-white"></div>
                <h6 className="uppercase text-white text-sm tracking-wider font-bold px-4">Commerciante</h6>
                <div className="w-40 h-0.5 bg-white"></div>
            </div>

            

            <div className="flex justify-center items-center">
                <div className="w-47 h-0.5 bg-white"></div>
                <h6 className="uppercase text-white text-sm tracking-wider font-bold px-4">Fattura</h6>
                <div className="w-47 h-0.5 bg-white"></div>
            </div>



            </div>

        </BgWrapper>
    )
};