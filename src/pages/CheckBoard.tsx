import s from "../scss/Board.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const CheckBoard = () => {
    const [queue, setQueue] = useState([]);
    const token = useSelector((state: RootState) => state.user.token);

    useEffect(() => {
        axios.get("https://mrsmilegod23.online/api/board/guard")
            .then((res) => setQueue(res.data.data.drivers))
            .catch(e => console.error(e));
    }, [])

    return (
        <div className={s.board}>
            <table>
                <thead>
                <tr>
                    <th>№ очереди</th>
                    <th>Гос. номер</th>
                </tr>
                </thead>
                <tbody>
                {
                    queue.map((queueItem, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{queueItem}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td>2</td>
                    <td>sdfdsf</td>
                </tr>,
                <tr>
                    <td>3</td>
                    <td>dsfdsf</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}