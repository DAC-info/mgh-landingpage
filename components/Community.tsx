import Image from "next/image"


const Community = ({ show, animate }: any) => {

    return (

        <><div className="relative lg:absolute left-0 lg:left-10 p-5 w-full lg:w-1/2 z-10 text-gray-200 text-center lg:text-left">
            
            <h2 className={`${animate && "animate__animated"}  ${show == 1 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                Passionate & Excited Community
            </h2>

            <h3 className={`${animate && "animate__animated"} ${show == 1 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                Friendly curated governance, voting for virtual real estate, and educating each other with enthusiasm for art and the metaverse.
            </h3>
        </div>
        
        <div className={`relative h-96 lg:h-full w-96 lg:w-full transform translate-x-0 lg:translate-x-1/4 `}>
                <Image src="/images/background/space-2.jpg" layout="fill" className={`transform scale-125 object-scale-down ${animate && "animate__animated"} ${show == 1 ? "animate__fadeInRight" : "animate__zoomOut"}`} />
            </div></>
    )
}

export default Community