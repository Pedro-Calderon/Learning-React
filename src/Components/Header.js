import React from "react";
import Navegation from "./Navegation";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center">
           <span className="font-bold" >
            <Link 
            to="/" 
            >
             AppName
            </Link>
           
           </span>
            <Navegation/>
        </header>
    )      

}

export default Header;