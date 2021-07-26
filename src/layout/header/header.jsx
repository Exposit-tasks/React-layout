import './header.scss';
import HamburgerMenu from "../hamburger-menu/hamburger-menu";
import Logo from "../logo/logo"
import SignIn from "../sign-in/sign-in";

 function Header(){
    return (
            <header>
                <HamburgerMenu/>
                <Logo/>
                <SignIn/>
            </header>
    )
}
export  default  Header;