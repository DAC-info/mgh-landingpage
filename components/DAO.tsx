import GovernanceIllustration from "./GovernanceIllustration";


const DAO = ({ show, animate }: any) => {

    return (

        <div className="relative lg:absolute inset-0 items-center justify-center h-full w-full flex flex-col-reverse lg:flex-row">
            <div className={`z-10 relative w-full lg:w-1/2 flex flex-col items-center justify-center ${animate && "animate__animated"}  ${show == 0 ? "animate__zoomIn" : "animate__zoomOut"}`}>
                <GovernanceIllustration />
            </div>
            <div className="relative  p-5 w-full lg:w-1/2 z-10 text-gray-200 text-center lg:text-right">
                <h2 className={`${animate && "animate__animated"}   ${show == 0 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                    Decentralized Autonomous Organization
                </h2>

                <h3 className={`${animate && "animate__animated"}  ${show == 0 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                    Community governed, enforced on the chain with no central leadership members have the power to choose on arts, assets and lands. As well as control the funds and management of the DAO overall.
                </h3>
            </div>

        </div>

    )
}

export default DAO