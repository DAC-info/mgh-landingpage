import NFTCard from "./NFTCard"


const NFTs = ({ show }: any) => {

    return (

        <><div className="absolute right-0 flex flex-col p-10 w-1/2 z-10 text-gray-200 text-right">

            <div className="py-5">
                <h4 className={`animate__animated   ${show == 2 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                    Gamer's Paradise
                </h4>

                <h5 className={`animate__animated  ${show == 2 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                    The metaverse is rapidly growing into its own virtual world shared by everyone. MGH is building its virtual real estate into a safe and versatile arena for artists, enthusiasts, and developers alike, featuring 3 parcels surround by brands like Atari and Revomon.
                </h5>
            </div>

            <div className="py-5">
                <h4 className={`animate__animated   ${show == 2 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                    Artist's Keeper
                </h4>

                <h5 className={`animate__animated  ${show == 2 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                    The Lack of liquidity and limited earning potential in the art market has made it hard for collectors. We fix that with staking, so ownership stays with you. Use your holdings and gain exposure to multiple virtual worlds with your art as the key.
                </h5>
            </div>
        </div>
        <div className={`z-10 left-20 px-5 xl:left-36 flex space-x-3 absolute animate__animated  ${show == 2 ? "animate__zoomIn" : "animate__zoomOut"}`}>
                <div className={` flex flex-col space-y-3 items-center justify-center ${show == 2 ? "transition-transform duration-40000 transform translate-y-full ease-linear" : ""}  `}>
                    <NFTCard classes="" img={"/images/NFTs/unnamed-2.png"} />
                    <NFTCard classes="" land={true} img={"/images/Lands/-154_-178.jpg"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-3.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                </div>
                <div className={` flex flex-col space-y-3 items-center justify-center  ${show == 2 ? "transition-transform duration-40000 transform -translate-y-full ease-linear" : ""}  `}>
                    <NFTCard classes="" img={"/images/NFTs/unnamed-5.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-6.png"} />
                    <NFTCard classes="" land={true} img={"/images/Lands/38_1.jpg"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-7.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                    <NFTCard classes="" img={"/images/NFTs/unnamed-4.png"} />
                </div>
            </div></>

    )
}

export default NFTs