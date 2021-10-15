import './styles.scss';

import logo from '../../assets/logo-spiderman.png';

export function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Spider Man" />

            <div className="menu">
                <ul>
                    <li>
                        <a href="/"> Home </a>
                    </li>
                    <li>
                        <a href="/">Story</a>
                    </li>
                    <li>
                        <a href="/">Walpappers</a>
                    </li>
                    <li>
                        <span>#beyourself</span>
                    </li>
                </ul>
            </div>

        </header>
    );
}