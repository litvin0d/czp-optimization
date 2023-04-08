import { Header } from "../components/Header";
import { TableComponent } from "../components/TableComponent";
import { ParkingSpaces } from "../components/ParkingSpaces";

export const GuardPage = () => {
    return (
        <div className="page">
            <Header />
            <ParkingSpaces />
            <TableComponent />
        </div>
    );
}