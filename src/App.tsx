import { AuthModal } from "./components/AuthModal";
import { LogoutBtn } from "./components/LogoutBtn";
import { useState } from "react";

export const App = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    // const token = localStorage.getItem("token");


    return (
        <div className="App">
            {
                token ?
                    <LogoutBtn onLogout={() => setToken(null)} /> :
                    <AuthModal onLogin={() => setToken(localStorage.getItem("token"))} />
            }
            {/*<AuthModal />*/}
        </div>
    );
};
