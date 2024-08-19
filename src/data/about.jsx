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
function Subsection({name, children, className = null}) {
    return (
        <div className={className}>
            <p className="pt-2 tangerine text-lg fira">
                {"//"} {name}
            </p>
            {children}
        </div>
    )
}

export function About() {
    return (
        <div className="page raleway"
             id="about">
            <div className="text-gray-500 text-sm fira">
                about
            </div>
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
                <a className="h-underline" href="https://polytopia.io/">Polytopia</a>, <span/>
                <a className="h-underline" href="hhttps://www.youtube.com/watch?v=wMCrEs1yW9w">MissileWars</a>
                ] or out biking with friends :)
            </Section>
            <Section name="technologies">
                Having picked up many things over my {new Date().getFullYear() - 2017} years of software development, here are a set of technologies/platforms I'm most comfortable with, and have used in the past:

                <div className="grid lg:grid-cols-2">
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
                    <Subsection name="languages" className="col-start-1 lg:col-end-3">
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