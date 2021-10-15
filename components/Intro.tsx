import Image from "next/image"
import { useEffect, useState } from "react";

import Socials from "./Socials"


const Intro = ({ scroll }: any) => {

    const [show, setShow] = useState(0);
    const delay = 2500

    useEffect(() => {
        setTimeout(() => {
            setShow((prevIndex) =>
                prevIndex === 1 ? 0 : prevIndex + 1
            )
        }, delay);
    }, [show]);

    return (
        <div className={`h-full lg:h-screen w-screen flex items-center justify-center`}>
            <a href="/" className="transform hover:scale-110 transition-all duration-500 ease-in-out absolute top-0 left-0 p-5 cursor-pointer z-20">
                <img src="/images/mgh_logo.png" className={`h-10 w-10`} />
            </a>

            <div className="absolute flex items-center p-5 z-20 right-0 h-1/3 inset-y-1/3">
                <Socials />
            </div>

            <div className="absolute flex flex-row space-x-5 -left-5 bottom-14 py-5 transform -rotate-90 z-10">
                <a className="text-gray-300 cursor-pointer hover:text-blue-400">
                    Privacy
                </a>
                <a className="text-gray-300 cursor-pointer hover:text-blue-400">
                    Terms
                </a>
            </div>


            <h1 className={`z-10 text-white animate__animated fixed  ${show == 0 ? "animate__zoomIn" : "animate__zoomOut"}`}>
                MetaGameHub
            </h1>

            <h1 className={`z-10 text-white animate__animated fixed  ${show == 1 ? "animate__zoomIn" : "animate__zoomOut"}`}>
                DAO
            </h1>



            <div className={`absolute top-0 right-0 h-screen w-full transform translate-x-1/4 opacity-75`}>
                <Image src="/images/background/space-2.jpg" layout="fill" className="transform scale-125 rotate-180 animate__animated animate__zoomIn space-img object-scale-down" />
            </div>

            <div className={`absolute font-medium top-0 h-screen w-full xl:w-2/4 z-10 flex justify-center items-center transition-all duration-500 ${scroll > 10 ? "animate__animated animate__zoomIn animate__delay-1s" : "hidden"}`}>
                <span className={`w-full mt-60 xl:mt-0 sm:w-1/2 max-w-sm px-8 text-lg lg:text-xl xl:text-2xl leading-normal text-gray-200 ${scroll > 10 ? scroll < 1500 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>Utility, governance and data combined in one ecosystem</span>
                <span className={`w-full mt-60 xl:mt-0 sm:w-1/2 max-w-xs px-8 texl-lg lg:text-xl xl:text-2xl leading-normal text-gray-200 ${scroll > 1500 ? scroll < 3000 ? "block animate__animated animate__zoomIn animate_delay-0s" : "animate__animated animate__zoomOut animate_slower hidden" : "hidden"}`}>AI NFT Pricing Oracle, Collaborative NFT Governance & Transparent NFT Pricing</span>
            </div>

        </div>
    )
}

export default Intro