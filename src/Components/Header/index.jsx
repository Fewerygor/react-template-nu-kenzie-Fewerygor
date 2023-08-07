import styles from "./Style.module.scss";
import logo from "../../assets/logo.svg"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <img src={logo} alt="Logo Nu Kenzie" />
            </nav>
        </header>
    )
};