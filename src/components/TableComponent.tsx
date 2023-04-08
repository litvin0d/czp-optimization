import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../scss/TableComponent.module.scss";

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

const TableRow: React.FC<TableRowProps> = ({ data }) => (
    <tr>
        <td>{data.id}</td>
        <td>{data.PassNumber}</td>
        <td>{data.CarNumber}</td>
        <td>{data.FIO}</td>
        <td>{data.SenderName}</td>
        <td>{data.CheckpointNumber}</td>
        <td>{data.ProductType}</td>
        <td>{data.ProductVolume}</td>
        <td>{data.MetricUnit}</td>
        <td>{data.status}</td>
    </tr>
);

export const TableComponent: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const token = useSelector((state: RootState) => state.user.token);

    useEffect(() => {
        axios.get("https://mrsmilegod23.online/api/guard/passes", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            setData(response.data.data.passes);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <table className={s.table}>
            <thead>
            <tr>
                {/*<th>ID</th>*/}
                <th>Номер пропуска</th>
                <th>Номер авто</th>
                <th>ФИО водителя</th>
                <th>Полное наименование отправителя</th>
                <th>Номер КПП</th>
                <th>Вид продукции</th>
                <th>Объем продукции</th>
                <th>ЕИ</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            {
                data &&
                data.map((rowData) => (
                    <TableRow key={rowData.id} data={rowData} />
                ))}
            </tbody>
        </table>
    );
};
