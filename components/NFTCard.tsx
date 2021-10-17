import Image from 'next/image'


const NFTCard = ({ img, classes, land=false }: any) => {
    return (

        <div className={`${classes} group relative flex flex-col w-36 xs:w-48 xl:w-56 rounded-lg bg-opacity-10 transform transition duration-300 ease-in-out border border-white border-opacity-10`}>

            <div className={`relative text-center ${land ? "h-36 xs:h-48 xl:h-56": "h-52 xs:h-64 xl:h-72"} w-full pb-full`}>
                <Image className="rounded-lg object-cover" src={img} layout="fill" />
            </div>

        </div>
    )
}

export default NFTCard


