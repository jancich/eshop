import Image from "next/image";
import React from "react";


const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r from-orange-300 to-orange-400 mb-8">
            <div className="text-black-800 mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="text-9xl md:text-11xl font-bold text-black mb-4">Welcome!</h1>
                    <p className="text-2xl md:text-4xl text-black mb-2">This is our new website</p>
                    <p className="text-3xl md:text-6xl text-black font-bold">Start ordering now!</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                <Image
                src='/skater-banner1.png'
                fill
                alt="Banner Image"
                className="object-contain"
                /> 
                </div>
            </div>
        </div>
    );
}
 
export default HomeBanner;
