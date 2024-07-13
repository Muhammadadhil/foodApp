import { Link } from "react-router-dom";
import {LOGO_URL} from "../../utils/constants"
import { useEffect, useState } from "react";

const Header = () => {

    // const logButton="login"
    console.log("header component renders");

    const [logButton,setLogButton] = useState("login");

    useEffect(() => {
        console.log("useEffect is called");
    }, [logButton]);

    return (
        <header className="header-container">
            <div className="logo">
                <img alt="app-logo" className="logo-image" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to='/Contact' >contact</Link>
                <a>restuarant</a>
                <button className="login-button" onClick={()=>{
                    logButton=="login"?setLogButton("logout"):setLogButton("login");
                }}>{logButton}</button>
            </div>
        </header>
    );
};


export default Header;