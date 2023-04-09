import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../scss/ButtonStatus.module.scss";

interface ButtonStatusProps {
    passNumber: number;
    status: string;
}

export const ButtonStatus = ({ passNumber, status }: ButtonStatusProps) => {
    const token = useSelector((state: RootState) => state.user.token);

    const handleStatus = () => {
        console.log(status)
        if (status === "Ожидание") {
            axios.post("https://mrsmilegod23.online/api/storekeeper/waiting/drivers", {
                PassNumber: passNumber,
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(() => {
                window.location.reload();
            }).catch((e) => {
                console.error(e);
            });
        } else {
            axios.post("https://mrsmilegod23.online/api/guard/pass", {
                PassNumber: passNumber,
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(() => {
                window.location.reload();
            }).catch((e) => {
                console.error(e);
            });
        }
    };

    const btnNameHandler = () => {
        if (status === "Отсутствует") {
            return "Прибыл";
        } else if (status === "Прибыл") {
            return "Ожидает";
        } else if (status === "Ожидание") {
            return "Завершить";
        }
    };

    return (
        <button className={s.button} onClick={() => handleStatus()}>
            {btnNameHandler()}
        </button>
    );
};