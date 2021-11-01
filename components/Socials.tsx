import { FaLinkedin, FaTelegramPlane, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";


const Socials = () => {

    return (
        <div className="flex flex-row lg:flex-col items-center justify-center space-y-0 space-x-5 lg:space-x-0 lg:space-y-2">
            <a href="https://www.instagram.com/metagamehub_dao/" className="cursor-pointer" target="_blank" >
                <FaInstagram className="social-media-icon" />
            </a>

            <a href="https://www.linkedin.com/company/metagamehub-dao/" className="cursor-pointer" target="_blank" >
                <FaLinkedin className="social-media-icon" />
            </a>

            <a href="https://twitter.com/MGH_DAO" className="cursor-pointer" target="_blank" >
                <FaTwitter className="social-media-icon" />
            </a>

            <a href="https://t.me/metagamehub_dao" className="cursor-pointer" target="_blank" >
                <FaTelegramPlane className="social-media-icon" />
            </a>

            <a href="https://www.youtube.com/channel/UC6lHXEEmjGiRmIVmiS0odpw" className="cursor-pointer" target="_blank" >
                <FaYoutube className="social-media-icon" />
            </a>
        </div>

    )
}

export default Socials