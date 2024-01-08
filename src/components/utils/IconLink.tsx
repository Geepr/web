import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class iconLinkData {
    to : string = undefined!;
    icon : IconDefinition = undefined!;
    btnColourClass? : string;
    title? : string;
}

// IconLink adds a link with a fa icon.
// Should be contained within a properly sized flexbox.
export default function IconLink({to, icon, btnColourClass = "btn-dark", title = ""} : Readonly<iconLinkData>) {
    return <Link className={`btn ${btnColourClass} d-flex flex-fill align-items-center`} role={'link'} title={title} to={to}><FontAwesomeIcon className='d-flex flex-fill' icon={icon}/></Link>
}
