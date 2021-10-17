import { useEffect, useState } from "react";

import DAO from "./DAO";
import Community from "./Community";
import Arts from "./Arts";
import Socials from "./Socials"


const Main = ({ animate }: any) => {
    const [show, setShow] = useState(0);
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const delay = 10000

    useEffect(() => {
        setTimeout(() => {
            setShow((prevIndex) =>
                prevIndex === 2 ? 0 : prevIndex + 1
            )
        }, delay);
        return () => { };
    }, [show]);

    const formSubmitted = async (e: any) => {
        e.preventDefault();
        let message;
        try {
            const res = await fetch("/api/addContact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email_address: email })
            });
            message = await res.json()
            setMessage(message.message)
        } catch (e) {
            setMessage("Something went wrong, try again later!")
        }
    }

    return (
        <div className={`relative h-full pt-16 lg:pt-0 lg:h-screen w-screen max-w-screen-2xl overflow-hidden flex flex-col items-center justify-center`}>
            <div className="flex space-x-5 justify-center items-center p-5 absolute top-0 left-0 z-20">
                <a href="/" className="transform hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer">
                    <img src="/images/mgh_logo.png" className={`h-10 w-10`} />
                </a>
                <h6 className={`${animate && "animate__animated"} ${show == 2 ? "animate__zoomOut" : "animate__zoomIn"} text-blue-400`}>MeTagaMeHUb</h6>
            </div>


            <DAO show={show} animate={animate} />

            <Community show={show} animate={animate} />

            <div className={` z-50 flex items-center justify-center p-0 lg:p-5 relative lg:absolute transition-all duration-1000 ${show == 1 ? "h-full lg:h-1/3 inset-y-0 lg:inset-y-1/3 right-0 lg:right-32 xl:right-60 2xl:right-64" : "top-0 right-0"} `}>
                <a href="https://twitter.com/MGH_DAO" target="_blank" className={`button py-4 ${show == 1 ? "lg:py-4" : "lg:py-2"} z-10 backdrop-filter backdrop-blur`}>
                    <span className={`button-text text-xl ${show == 1 ? "lg:text-xl" : "lg:text-base"}`}>Join the community!</span>
                </a>
            </div>

            <Arts show={show} animate={animate} />


            <div className="relative mt-10 lg:mt-0 lg:absolute flex flex-col space-y-2 items-center justify-center bottom-0 right-0 p-5 pb-0 lg:pb-3 w-full lg:w-80 xl:w-96 z-10 rounded-tl-3xl bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
                <p className="text-gray-300 font-medium text-xs xl:text-base">Sign up for our Newsletter!</p>
                <form onSubmit={formSubmitted} onFocus={() => setMessage("")} className="relative flex items-center max-w-sm w-full">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" className="bg-transparent w-full text-white py-2 px-4 focus:outline-none border rounded-full placeholder-white placeholder-opacity-75" />
                    <button type="submit" className="absolute bg-gray-200 right-0 h-4/5 border rounded-full mr-1  w-1/6">
                        <span className="text-black font-medium">Join</span>
                    </button>
                </form>
                <p className="text-xs text-gray-200 mt-2">{message}</p>
            </div>

            <div className="relative lg:absolute flex items-center p-5 z-20 bottom-0 left-0">
                <Socials />
            </div>

            <p className="relative lg:absolute bottom-1 text-gray-400 text-xxs lg:text-xs z-20 mt-5 lg:mt-0">This website uses cookies to see how you interact with it. <a className="cursor-pointer hover:text-blue-400">Privacy Policy</a></p>

        </div>
    )
}

export default Main