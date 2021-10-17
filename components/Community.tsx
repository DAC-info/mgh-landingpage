import Image from "next/image"


const Community = ({ show, animate }: any) => {

    return (

        <div className="relative lg:absolute inset-0 items-center justify-center h-full w-full flex flex-col lg:flex-row">

            <div className="relative p-5 pl-5 lg:pl-16 w-full lg:w-1/2 z-10 text-gray-200 text-center lg:text-left">
                <h2 className={`${animate && "animate__animated"}  ${show == 1 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                    Passionate & Excited Community
                </h2>

                <h3 className={`${animate && "animate__animated"} ${show == 1 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                    Friendly curated governance, voting for virtual real estate, and educating each other with enthusiasm for art and the metaverse.
                </h3>
            </div>

            <div className={`hidden lg:block relative h-96 lg:h-full w-96 lg:w-1/2 transfrom scale-125`}>
                <Image src="/images/background/space-2.jpg" layout="fill" className={`object-scale-down ${animate && "animate__animated"} ${show == 1 ? "animate__fadeInRight" : "animate__zoomOut"}`} />
            </div>
        </div>
    )
}

export default Community