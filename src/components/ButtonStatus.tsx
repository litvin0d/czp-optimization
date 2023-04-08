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
        axios.post("https://mrsmilegod23.online/api/guard/pass", {
            PassNumber: passNumber,
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            window.location.reload();
        }).catch((e) => {
            console.error(e);
        });
    };

    return (
        <button className={s.button} onClick={() => handleStatus()}>
            {status === "Прибыл" ? "Ожидает" : "Прибыл"}
        </button>
    );
};