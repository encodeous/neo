import {Navbar} from "../components/navbar.jsx";
import {ProjectView} from "../data/projectView.jsx";

export function Projects(){
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Navbar/>
            <div className="p-10">
                <div className="text-3xl mocha fira">
                    {"//"} all projects
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <ProjectView className="max-w-[400px]"/>
                </div>
            </div>

        </div>
    )
}