import React, { FormEvent, useState } from "react";
import axios from "axios";

import title from "../assets/title.png";
import s from "../scss/AuthModal.module.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

interface LoginResponse {
    token: string;
    role: string;
}

export const AuthModal = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            axios.post<LoginResponse>("https://mrsmilegod23.online/api/login", {
                login: login.trim(),
                password: password.trim(),
            }).then((res) => {
                dispatch(setUser(res.data))
                console.log("Login successful!");
                setError(false);
            });
        } catch (e) {
            setError(true);
            console.error(e);
        }
    };

    return (
        <main className={s.main}>
            <form className={s.form} onSubmit={handleSubmit}>
                <img src={title} alt="Челябинский Цинковый Завод" />

                <div className={s.inputWrapper}>
                    <h2>Логистика</h2>
                    <h3>Авторизация</h3>
                    { error && <p className={s.error}>Ошибка! Неверный логин или пароль.</p> }
                    <input
                        type="text"
                        name="login"
                        placeholder="Логин"
                        required={true}
                        value={login}
                        onChange={event => setLogin(event.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        required={true}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={login ? s.active : ""}
                >
                    Войти
                </button>
            </form>
        </main>
    );
};