import "../styles/root.scss"
import {Navbar} from "../components/navbar.jsx";

import {Profile} from "../data/profile.ts";


export function Root() {
    return (
        <div className="h-full">
            <Navbar/>
            <div className="flex flex-col md:flex-row">
                <div className="md:min-w-80">
                    <Sidebar/>
                </div>
                <div className="flex-shrink">
                    <About/>
                </div>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="elevated md:m-10 p-5 md:sticky md:top-24">
            <div className="flex flex-row md:flex-col items-center md:items-start align-middle gap-0.5">
                <div className="place-self-center">
                    <img src={Profile.picture}
                         className="max-w-14 md:max-w-28 rounded-full border box-border p-1"
                         style={{
                             borderColor: 'rgb(255, 255, 255, 0.5)'
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
                        <a target="_top" key={index} href={social.url} className="side-link">
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

// eslint-disable-next-line react/prop-types
function Section({name, children}) {
    return (
        <div>
            <p className="pt-3 fira mocha text-xl">
                {"//"} {name}
            </p>
            {children}
        </div>
    )
}
// eslint-disable-next-line react/prop-types
function Subsection({name, children, className}) {
    return (
        <div className={className}>
            <p className="pt-2 tangerine text-lg fira">
                {"//"} {name}
            </p>
            {children}
        </div>
    )
}

function About() {
    return (
        <div className="page raleway h-svh"
             id="about">
            <div className="text-4xl fira font-light">
                Hey!
            </div>
            <p>
                My name is Adam, aka <strong>encodeous</strong>
            </p>
            <Section name="a little about me">
                <p>
                    I am a second year Software Engineering student at the University of Waterloo.
                </p>
                <p className="pt-2">
                    In a few months, I will be interning at Oracle Labs, developing GraalOS technologies.
                </p>
                <p className="pt-2">
                    For more information about me and my work, you can continue reading!
                </p>
            </Section>
            <Section name="hobbies">
                When I'm not tinkering around with tech, you might find me playing some games like
                [
                <a className="mocha link-bg" href="https://polytopia.io/">Polytopia</a>, <span/>
                <a className="mocha link-bg" href="hhttps://www.youtube.com/watch?v=wMCrEs1yW9w">MissileWars</a>
                ] or out biking with friends :)
            </Section>
            <Section name="technologies">
                Having picked up many things over my {new Date().getFullYear() - 2017} years of software development, here are a set of technologies/platforms I'm most comfortable with, and have used in the past:

                <div className="grid md:grid-cols-2">
                    <Subsection name="backend">
                        <ul className="list-disc list-inside">
                            <li>
                                ASP.NET Core
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Tokio
                            </li>
                        </ul>
                    </Subsection>
                    <Subsection name="frontend">
                        <ul className="list-disc list-inside">
                            <li>
                                React (and React Native/Expo)
                            </li>
                            <li>
                                Svelte
                            </li>
                            <li>
                                XAML (WPF, WinUI, MAUI etc.)
                            </li>
                        </ul>
                    </Subsection>
                    <Subsection name="devops & orchestration">
                        <ul className="list-disc list-inside">
                            <li>
                                Kubernetes (GKE, k3s)
                            </li>
                            <li>
                                Docker (and compose)
                            </li>
                            <li>
                                Git Platforms (GitLab, Gitea, GitHub)
                            </li>
                        </ul>
                    </Subsection>
                    <Subsection name="network & infrastructure">
                        <ul className="list-disc list-inside">
                            <li>
                                Cloud Platforms (too many to name)
                            </li>
                            <li>
                                Wireguard, soon to be superseded by Nylon
                            </li>
                        </ul>
                    </Subsection>
                    <Subsection name="languages" className="col-start-1 md:col-end-3">
                        Here are a big ol' list of languages I know, in no particular order:
                        <p className="fira">
                            C#, Java, Python, Rust, C, C++, JavaScript, SQL (Postgres), HTML/CSS/SCSS, Dart, XAML, LateX
                        </p>
                    </Subsection>
                </div>
            </Section>
        </div>
    )
}

function Projects(){

}