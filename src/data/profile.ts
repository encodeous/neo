import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
// @ts-ignore
import cube from '../assets/rt-cube.jpeg'

export const Profile = {
    name: "Adam Chen",
    organization: "University of Waterloo",
    picture: cube,
    socials: [
        {
            "label": "GitHub",
            "icon": FaGithub,
            "url": "https://github.com/encodeous",
        },
        {
            "label": "Linkedin",
            "icon": FaLinkedin,
            "url": "https://www.linkedin.com/in/adamjiaqichen/",
        },
        {
            "label": "Email",
            "icon": MdEmail,
            "url": "mailto:contact@encodeous.ca",
        }
    ]
}
