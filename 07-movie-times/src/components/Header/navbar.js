import React,{useState} from "react"




function NavBar({children}){
    
    return(
        <>
        <nav className="nav-bar">
        {children}
      </nav>
        </>
    )
}

export default NavBar