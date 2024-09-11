import {FaFilePdf, FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
// @ts-ignore
import cube from '../assets/rt-cube.jpeg'
import React from "react";

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
        },
        {
            "label": "Resume",
            "icon": FaFilePdf,
            "url": "/resume.pdf",
        },
        {
            "label": "Webring",
            "icon": () => <img className="h-[1em]" alt="Software Engineering Webring Logo" src="/assets/webring.svg"/>,
            "url": "https://se-webring.xyz",
        }
    ]
}

