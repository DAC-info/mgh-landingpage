import Image from "next/image"
import { useEffect, useState } from "react";
import GovernanceIllustration from "./GovernanceIllustration";
import NFTCard from "./NFTCard";
import DAO from "./DAO";
import Community from "./Community";
import NFTs from "./NFTs";

import Socials from "./Socials"


const Desktop = ({ scroll }: any) => {

    const [show, setShow] = useState(0);
    const delay = 5000


    useEffect(() => {
        setTimeout(() => {
            setShow((prevIndex) =>
                prevIndex === 2 ? 0 : prevIndex + 1
            )
        }, delay);
        return () => {};
    }, [show]);
    

    return (
        <div className={`relative h-screen w-screen overflow-hidden max-w-screen-2xl flex items-center justify-center`}>
            <a href="/" className="transform hover:scale-110 transition-all duration-500 ease-in-out absolute top-0 left-0 p-5 cursor-pointer z-20">
                <img src="/images/mgh_logo.png" className={`h-10 w-10`} />
            </a>

            <div className="absolute flex items-center p-5 z-20 bottom-0 left-0">
                <Socials />
            </div>
{/* 
            <div className="absolute flex flex-row space-x-5 left-0 bottom-5 py-5 transform -rotate-90 z-10">
                <a className="text-gray-300 cursor-pointer hover:text-blue-400">
                    Privacy
                </a>
            </div> */}

            <Community show={show} />

            <DAO show={show} />

            <NFTs show={show} />

            <div className="absolute flex flex-col space-y-5 items-center justify-center bottom-0 right-0 p-5 w-2/5 z-10 rounded-tl-xl bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <p className="text-gray-300">Sign up for our Newsletter!</p>
                <form className="relative flex items-center max-w-sm w-full">
                    <input type="email" placeholder="Email address" className="bg-transparent w-full text-white py-3 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                    <button type="submit" className="absolute bg-gray-200 right-0 h-4/5 border rounded-full mr-1  w-1/6">
                        <span className="text-black font-medium">Join</span>
                    </button>
                </form>
            </div>

            <a href="https://thedac.medium.com" target="_blank" className={`button absolute z-10 m-5 transform transition-all duration-1000 ${show == 1 ? "right-20 xl:right-64 py-4 top-1/2": "top-0 right-0"} backdrop-filter backdrop-blur`}>
                <span className={`button-text ${show == 1 && "text-xl"}`}>Join the community!</span>
            </a>

        </div>
    )
}

export default Desktop