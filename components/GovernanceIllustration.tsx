import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const GovernanceIllustration = () => {
    return (
        <div className="relative flex rounded-full items-center font-medium justify-center h-96 w-96 transform scale-75 sm:scale-100 2xl:scale-125 my-0 sm:my-10 lg:my-0">

            <div className="h-8 w-10 absolute top-22 flex flex-col items-center z-10">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="h-8 w-10 absolute top-36 transform rotate-65 right-22 flex flex-col items-center z-10">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="h-8 w-10 absolute top-36 transform -rotate-65 left-22 flex flex-col items-center z-10">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="h-8 w-10 absolute bottom-26 transform -rotate-140 left-28 flex flex-col items-center z-10">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="h-8 w-10 absolute bottom-26 transform rotate-140 right-28 flex flex-col items-center z-10">
                <IoIosArrowUp className="absolute top-0 text-white text-2xl z-10" />
                <div className="absolute bottom-0 border-l-2 border-white h-6 rounded-full" />
            </div>

            <div className="relative h-full w-full">
                <img src="/images/mgh_logo.png" className="fixed blur-xl"/>
            </div>

            <div className="absolute border border-opacity-30 rounded-full p-1 flex justify-center backdrop-filter backdrop-blur-lg items-center h-32 w-32 z-10">
                <p className="text-gray-200 text-center text-lg">Community</p>
            </div>

            <div className="absolute top-0 border border-opacity-30 rounded-full p-2 flex justify-center backdrop-filter backdrop-blur-lg items-center w-22 h-22 z-10">
                <p className="text-gray-200 text-center text-xs">Arts</p>
            </div>

            <div className="absolute top-24 right-0 border border-opacity-30 rounded-full p-2 flex justify-center backdrop-filter backdrop-blur-lg items-center w-22 h-22 z-10">
                <p className="text-gray-200 text-center text-xs">Funds</p>
            </div>

            <div className="absolute top-24 left-0 border border-opacity-30 rounded-full p-2 flex justify-center backdrop-filter backdrop-blur-lg items-center w-22 h-22 z-10">
                <p className="text-gray-200 text-center text-xs">Lands</p>
            </div>

            <div className="absolute bottom-6 left-12 border border-opacity-30 rounded-full p-2 flex justify-center backdrop-filter backdrop-blur-lg items-center w-22 h-22 z-10">
                <p className="text-gray-200 text-center text-xs">Management</p>
            </div>

            <div className="absolute bottom-6 right-12 border border-opacity-30 rounded-full p-2 flex justify-center backdrop-filter backdrop-blur-lg items-center w-22 h-22 z-10">
                <p className="text-gray-200 text-center text-xs">Assets</p>
            </div>

        </div>
    )
}

export default GovernanceIllustration


