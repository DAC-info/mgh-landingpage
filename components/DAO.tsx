import GovernanceIllustration from "./GovernanceIllustration";


const DAO = ({ show }: any) => {

    return (

        <><div className="absolute right-0 p-10 w-1/2 z-10 text-gray-200 text-right">
            <h2 className={`animate__animated   ${show == 0 ? "animate__fadeInUpBig" : "animate__zoomOut"}`}>
                Decentralized Autonomous Organization
            </h2>

            <h3 className={`animate__animated  ${show == 0 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                Community governed, enforced on the chain with no central leadership members have the power to choose on arts, assets and lands. As well as control the funds and management of the DAO overall.
            </h3>
        </div><div className={`z-10 absolute left-26 animate__animated  ${show == 0 ? "animate__fadeInUp animate__delay-2s" : "animate__zoomOut"}`}>
                <GovernanceIllustration />
            </div></>

    )
}

export default DAO