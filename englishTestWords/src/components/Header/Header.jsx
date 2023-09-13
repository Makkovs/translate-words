import { NavLink } from "react-router-dom";

import { CONFIGURE_ROUTE, TEST_WORDS_ROUTE, TEST_TRANSLATES_ROUTE } from "../../utils/consts";

import "./header.css"

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
                <h2>Translate Words</h2>
            </div>
            <nav className="header__navigation">
                <div className="navigation__links">
                    <div className="navigation__button">
                        <NavLink
                            className="navigation__link"
                            to={CONFIGURE_ROUTE}>
                            Словник
                        </NavLink>
                    </div>
                    <div className="navigation__button">
                        <NavLink
                            className="navigation__link"
                            to={TEST_WORDS_ROUTE}>
                            Слова
                        </NavLink>
                    </div>
                    <div className="navigation__button">
                        <NavLink
                            className="navigation__link"
                            to={TEST_TRANSLATES_ROUTE}>
                            Переклади
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;