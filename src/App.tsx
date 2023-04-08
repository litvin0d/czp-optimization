import { AuthModal } from "./components/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { EconomistPage } from "./pages/EconomistPage";
import { useEffect } from "react";
import { setUser } from "./redux/userSlice";
import { GuardPage } from "./pages/GuardPage";
import { StorekeeperPage } from "./pages/StorekeeperPage";

export const App = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        if (token && role) {
            dispatch(setUser({ token, role }));
        }
    }, []);

    const handlePages = () => {
        if (user.token && user.role === "Economist") {
            return <EconomistPage />;
        } else if (user.token && user.role === "Guard") {
            return <GuardPage />;
        } else if (user.token && user.role === "Storekeeper") {
            return <StorekeeperPage />;
        } else {
            return <AuthModal />;
        }
    };

    return (
        <div className="App">
            { handlePages() }
        </div>
    );
};
