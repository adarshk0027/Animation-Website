import {
    AiFillGithub,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineWhatsApp
} from 'react-icons/ai'

const socials = [{
        name: "GitHub",
        icon: < AiFillGithub className = 'text-3xl text-gray-500 ' /> ,
        link: "#"
    },
    {
        name: "LinkedIn",
        icon: < AiOutlineLinkedin className = 'text-3xl text-gray-500 ' /> ,
        link: "#"
    },

    {
        name: "Twitter",
        icon: < AiOutlineTwitter className = 'text-3xl text-blue-400 ' /> ,
        link: "#"
    },
    {
        name: "whatsapp",
        icon: < AiOutlineWhatsApp className = 'text-3xl text-green-300 ' / > ,
        link: "#"
    },

]

export default socials;