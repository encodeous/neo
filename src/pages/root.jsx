import "../styles/root.scss"
import {Navbar} from "../components/navbar.jsx";

import {Profile} from "../data/profile.tsx";
import {About} from "../data/about.jsx";
import {ProjectView} from "../data/projectView.jsx";
import {Link} from "react-router-dom";
import {useEffect} from "react";


export function Root() {
    useEffect(() => {
        const hash = window.location.hash;
        setTimeout(() => {
            const element = document.getElementById(hash.replace("#", ""));
            console.log(hash)
            if(element)
                element.scrollIntoView({behavior: "smooth"});
        }, 0)
    }, []);
    return (
        <div className="h-full">
            <Navbar/>
            <div className="grid md:grid-cols-[auto_1fr]">
                <div className="md:w-60">
                    <Sidebar/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <About/>
                    </div>
                    <div>
                        <Projects/>
                    </div>
                </div>
                <div
                    className="col-start-1 md:col-end-3 p-4 text-xs bg-gradient-to-b from-transparent to-[#0000001f] from-10%">
                    <p>
                        No bugs were hurt while making this site. <a href="https://github.com/encodeous/neo" className="h-underline" target="_blank">encodeous/neo</a>
                    </p>
                    <p>
                        © {new Date().getFullYear()} Adam Chen. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="elevated md:m-2 p-5 md:sticky md:top-24">
            <div className="flex flex-row md:flex-col items-center md:items-start align-middle gap-0.5">
                <div className="place-self-center">
                    <img src={Profile.picture}
                         className="max-w-14 md:max-w-28 rounded-full border box-border p-1"
                         style={{
                             borderColor: '#fd9b2c7f'
                         }}
                         alt="Profile Picture"/>
                </div>

                <div className="md:p-1"/>
                <div className="hidden sm:block">
                    <div className="font-semibold flex-grow pl-2">
                        {Profile.name}
                    </div>
                    <div className="max-w-30 pl-2">
                        {Profile.organization}
                    </div>
                </div>

                <div className="md:p-1 flex-grow"/>
                {Profile.socials.map((social, index) =>
                    (
                        <a target="_blank" key={index} href={social.url} className="side-link md:w-full">
                            <div className="text-3xl sm:text-base">
                                <social.icon/>
                            </div>
                            <div className="hidden sm:block">{social.label}</div>
                        </a>
                    )
                )}
            </div>
        </div>
    )
}

function Projects(){
    return (
        <div className="page raleway" id="projects">
            <div className="text-gray-500 text-sm fira">
                projects
            </div>
            <div className="italic">
                the following are a subset of my projects, you can <Link to="/projects" className="h-underline">view all</Link> of my public projects.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProjectView maxCount={6} className="max-w-[400px]"/>
            </div>
        </div>
    )
}