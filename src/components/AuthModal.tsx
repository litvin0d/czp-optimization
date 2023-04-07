import React, { FormEvent, useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";
import s from "../scss/AuthModal.module.scss";

interface LoginResponse {
    token: string;
}

interface LoginFormProps {
    onLogin: () => void;
}

export const AuthModal = ({ onLogin }: LoginFormProps) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post<LoginResponse>("https://mrsmilegod23.online/api/login", {
                login: login.trim(),
                password: password.trim(),
            });
            const { token } = response.data;
            localStorage.setItem("token", token);
            onLogin();
            console.log("Login successful!");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className={s.main}>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.title}>
                    <img src={logo} alt="Челябинский Цинковый Завод" />
                    <h2>Логистика</h2>
                </div>

                <div className={s.inputWrapper}>
                    <h3>Вход в аккаунт</h3>
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