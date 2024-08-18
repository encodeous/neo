import {NavHashLink} from "react-router-hash-link";
import "../App.scss"

export function Navbar(){
    return (
        <div className="flex flex-row align-middle pl-5 pr-5 sticky top-0 w-full frost">
            <NavHashLink smooth to="/#top">
                <div className="fira font-light text-xl n-link">
                    Adam Chen
                </div>
            </NavHashLink>
            <div className="flex-grow"/>
            <div className="flex flex-row space-x-3">
                <NavHashLink smooth to="/#about">
                    <div className="inter n-link">
                        About
                    </div>
                </NavHashLink>
                <NavHashLink smooth to="/#projects">
                    <div className="inter n-link">
                        Projects
                    </div>
                </NavHashLink>
            </div>
        </div>
    )
}