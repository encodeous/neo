// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsList from './projects.yaml'
import seedrandom from 'seedrandom'
import chroma from "chroma-js";
import "../styles/project.scss"
import {FaBox, FaCode, FaFile, FaGamepad, FaLayerGroup, FaLink, FaPlus, FaVideo} from "react-icons/fa";

export function ProjectView({maxCount, className = ""}) {

    let selected = ProjectsList.items.sort(
        (a, b) => parseFloat(b.weight) - parseFloat(a.weight)
    )

    if (maxCount) {
        selected = selected.slice(0, maxCount);
    }

    return (
        <>
            {selected.map((project, index) =>
                <Project key={index} item={project} className={className}/>
            )}
        </>
    )
}

function getColor(v, nameCode) {
    return chroma.hsv(nameCode, 0.6, v).hex();
}

function Project({item, className = ""}) {
    const {name, weight, image, links, content} = item;
    const nameCode = seedrandom(name)() * 360;
    const primary = getColor(0.4, nameCode);
    const secondary = getColor(0.2, nameCode);
    return (
        <div className={"elevated mt-6 h-full flex flex-col bg-cover bg-center" + (image ? " " : " pt-0 ") + className}
             style={{
                 "--project-color": primary,
                 "--secondary-color": secondary,
                 ...(image && {backgroundImage: "linear-gradient(to bottom, transparent 0%, #24242476 10%, #242424 80%), url(" + image + ")"})
             }}>
            <div className="relative">
                {/*{image && <img className="absolute -z-10 " src={image} alt="Project Image"/>}*/}
                <div className="font-black absolute text-2xl px-1 bottom-0 z-10"
                     style={{
                         backgroundColor: primary,
                         bottom: "-1.5rem"
                     }}>
                    {name}
                </div>
            </div>
            <div className="title-decor backdrop-blur"></div>
            <div className="divide-y divide-gray-600 h-full flex flex-col backdrop-blur">
                <div className="inter p-5 flex-grow">
                    {content}
                </div>
                <div className="flex flex-row-reverse">
                    {links.map((link, index) =>
                        <div key={index}>
                            <a className="bg-[var(--project-color)] hover:bg-[var(--secondary-color)] transition p-1 rounded-sm m-1 flex flex-row items-center"
                               target="_blank"
                               href={link.link}>
                                <Icon name={link.icon}/>
                                <div className="pl-1">
                                    {link.name}
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function Icon({name}) {
    const mp = {
        "fa-code": FaCode,
        "fa-box": FaBox,
        "fa-layer-group": FaLayerGroup,
        "fa-video": FaVideo,
        "fa-link": FaLink,
        "fa-file": FaFile,
        "fa-plus": FaPlus,
        "fa-gamepad": FaGamepad
    }
    const CurIcon = mp[name];
    return (
        <CurIcon/>
    )
}