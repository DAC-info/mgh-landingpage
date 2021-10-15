import { FaLinkedin, FaTelegramPlane, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";


const Socials = () => {

    return (
        <div className="flex flex-col items-center justify-center space-y-2">
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

            <a href="https://discord.gg/QEWfTJeWCV" className="cursor-pointer" target="_blank" >
                <FaDiscord className="social-media-icon" />
            </a>
        </div>

    )
}

export default Socials