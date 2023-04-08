import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/userSlice";
import { RootState } from "../redux/store";
import s from "../scss/LogoutBtn.module.scss";

export const LogoutBtn = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleRole = (): string => {
        if (user.role === "Economist") {
            return "Экономист";
        } else if (user.role === "Guard") {
            return "Охрана";
        } else if (user.role === "Storekeeper") {
            return "Кладовщик";
        } else {
            return "Выйти"
        }
    }

    const handleLogout = () => {
        try {
            axios.get("https://mrsmilegod23.online/api/logout", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then((res) => {
                if (res.status === 200) {
                    dispatch(clearUser());
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button className={s.btn} onClick={() => handleLogout()}>
            <span>{handleRole()}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"/>
            </svg>
        </button>
    )
}