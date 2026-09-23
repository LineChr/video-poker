import { NavLink } from "react-router";
import styles from "./Header.module.css";


/*viser en navigasjonmeny til de tre ulike sidene.*/
export default function Header() {
    return (
        <header>
            <nav className={styles.navBar}>
                <NavLink to="/">game</NavLink>
                <NavLink to="/PlayerSelect">player select</NavLink>
                <NavLink to="/Rules">rules</NavLink>
            </nav>
        </header>
    );
}