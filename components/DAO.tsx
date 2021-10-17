import GovernanceIllustration from "./GovernanceIllustration";


const DAO = ({ show, animate }: any) => {

    return (

        <><div className="relative lg:absolute right-0 p-10 w-full lg:w-1/2 z-10 text-gray-200 text-center lg:text-right">
            <h2 className={`${animate && "animate__animated"}   ${show == 0 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                Decentralized Autonomous Organization
            </h2>

            <h3 className={`${animate && "animate__animated"}  ${show == 0 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                Community governed, enforced on the chain with no central leadership members have the power to choose on arts, assets and lands. As well as control the funds and management of the DAO overall.
            </h3>
        </div>
            <div className={`z-10 relative lg:absolute left-0 lg:left-26 ${animate && "animate__animated"}  ${show == 0 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                <GovernanceIllustration />
            </div></>

    )
}

export default DAO