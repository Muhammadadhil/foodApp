import {LOGO_URL} from "../../utils/constants"

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">
                <img alt="app-logo" className="logo-image" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <a>home</a>
                <a>about</a>
                <a>contact</a>
                <a>restuarant</a>
            </div>
        </header>
    );
};


export default Header;