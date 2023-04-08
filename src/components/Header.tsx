import logo from "../assets/logo.svg";
import s from "../scss/Header.module.scss";
import { LogoutBtn } from "./LogoutBtn";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.title}>
                <img src={logo} alt="ЧЦЗ" />
                <h2>Логистика</h2>
            </div>
            <LogoutBtn />
        </header>
    );
}