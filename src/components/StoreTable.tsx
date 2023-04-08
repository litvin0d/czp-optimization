import { useEffect, useState, FC } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../scss/TableComponent.module.scss";
import { ButtonStatus } from "./ButtonStatus";

interface DataItem {
    id: number;
    PassNumber: number;
    CarNumber: string;
    FIO: string;
    SenderName: string;
    CheckpointNumber: string;
    ProductType: string;
    ProductVolume: number;
    MetricUnit: string;
    status: string;
}

type TableRowProps = {
    data: DataItem;
};

const StoreRow: FC<TableRowProps> = ({ data }) => {
    return (
        <tr>
            <td>{data.PassNumber}</td>
            <td>{data.CarNumber}</td>
            <td>{data.FIO}</td>
            <td>{data.SenderName}</td>
            <td>{data.CheckpointNumber}</td>
            <td>{data.ProductType}</td>
            <td>{data.ProductVolume}</td>
            <td>{data.MetricUnit}</td>
            <td>{data.status}</td>
            <td><ButtonStatus passNumber={data.PassNumber} status={data.status} /></td>
        </tr>
    )};

export const StoreTable: FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const token = useSelector((state: RootState) => state.user.token);

    useEffect(() => {
        axios.get("https://mrsmilegod23.online/api/storekeeper/waiting/drivers", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            setData(response.data.data.drivers);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th>Номер пропуска</th>
                <th>Номер авто</th>
                <th>ФИО водителя</th>
                <th>Полное наименование отправителя</th>
                <th>Номер КПП</th>
                <th>Вид продукции</th>
                <th>Объем продукции</th>
                <th>ЕИ</th>
                <th>Статус</th>
                <th>Кнопка</th>
            </tr>
            </thead>
            <tbody>
            {
                data &&
                data.map((rowData) => (
                    <StoreRow key={rowData.id} data={rowData} />
                ))}
            </tbody>
        </table>
    );
};
