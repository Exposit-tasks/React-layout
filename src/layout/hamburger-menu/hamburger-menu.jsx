import './hamburger-menu.scss'

 function HamburgerMenu(){
    return(
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span/>
            </label>

            <ul className="menu__box">
                <li className="burger_logo">
                    <h1>
                        <a href="https://kichukegor.github.io/SASS-Task//">dream-travel</a>
                    </h1>
                </li>
                <li><a className="menu__item" href="#">Tour selection</a></li>
                <li><a className="menu__item" href="#">Last minute vouchers</a></li>
                <li><a className="menu__item" href="#">Tourist memo</a></li>
                <li><a className="menu__item" href="#">Customer Review</a></li>
                <li><a className="menu__item" href="#">Contact</a></li>
            </ul>
        </div>
    )
}
export  default  HamburgerMenu;
