import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <nav>
                <ul className={s.navList}>
                    <li className={s.item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                            to="movies"
                        >
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
