import { Header } from "../components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const EconomistPage = () => {
    const token = useSelector((state: RootState) => state.user.token);

    const addPass = () => {
        axios.post("https://mrsmilegod23.online/api/economist/pass", {}, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }).then((res) => console.log(res.data)).catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="page">
            <Header />
            <button onClick={() => addPass()}>Добавить пропуск</button>
        </div>
    );
}