import ArtCard from "./ArtCard"


const Arts = ({ show, animate }: any) => {

    return (

        <div className="py-10 lg:py-0 relative lg:absolute inset-0 items-center justify-center h-full w-full flex flex-col-reverse lg:flex-row">

            <div className={`z-10 relative w-full lg:w-1/2 flex space-x-3 items-center justify-center lg:justify-end mr-0 pl:0 xl:pl-16 lg:mr-10 xl:justify-center  ${animate && "animate__animated"} ${show == 2 ? "animate__zoomIn" : "animate__zoomOut"}`}>
                <div className={` flex flex-col space-y-3 items-center justify-center ${show == 2 ? "transition-transform duration-50000 transform translate-y-0 lg:translate-y-full ease-linear" : ""}  `}>
                    <ArtCard classes="" img={"/images/Arts/unnamed-1.png"} />
                    <ArtCard classes="" land={true} img={"/images/Lands/unnamed-1.jpg"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-3.png"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-4.png"} />
                    <ArtCard classes="" land={true} img={"/images/Lands/unnamed-3.jpg"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-5.png"} />
                </div>
                <div className={` flex flex-col space-y-3 items-center justify-center  ${show == 2 ? "transition-transform duration-50000 transform translate-y-0 lg:-translate-y-full ease-linear" : ""}  `}>
                    <ArtCard classes="" img={"/images/Arts/unnamed-6.png"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-7.png"} />
                    <ArtCard classes="" land={true} img={"/images/Lands/unnamed-2.jpg"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-8.png"} />
                    <ArtCard classes="" img={"/images/Arts/unnamed-2.png"} />
                    <ArtCard classes="" land={true} img={"/images/Lands/unnamed-4.jpg"} />
                </div>
            </div>


            <div className="max-w-screen-sm lg:max-w-full relative flex transfrom -translate-y-0 flex-col space-y-5 lg:space-y-10 p-5 w-full lg:w-1/2 z-10 text-gray-200 text-center lg:text-right">

                <div >
                    <h4 className={`${animate && "animate__animated"}   ${show == 2 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                        Gamer's Paradise
                    </h4>

                    <h5 className={`${animate && "animate__animated"}  ${show == 2 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                        The metaverse is rapidly growing into its own virtual world shared by everyone. MGH is building its virtual real estate into a safe and versatile arena for artists, enthusiasts, and developers alike, featuring 3 parcels surround by brands like Atari and Revomon.
                    </h5>
                </div>

                <div >
                    <h4 className={`${animate && "animate__animated"}   ${show == 2 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                        Artist's Keeper
                    </h4>

                    <h5 className={`${animate && "animate__animated"}  ${show == 2 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                        The Lack of liquidity and limited earning potential in the art market has made it hard for collectors. We fix that with staking, so ownership stays with you. Use your holdings and gain exposure to multiple virtual worlds with your art as the key.
                    </h5>
                </div>
            </div>

        </div>

    )
}

export default Arts