import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import s from "../scss/ParkingSpaces.module.scss";
import { setParkingSpaceStatus } from "../redux/parkingSpaceSlice";

export const ParkingSpaces = () => {
    const token = useSelector((state: RootState) => state.user.token);
    const isFull = useSelector((state: RootState) => state.parkingSpace.isFull);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://mrsmilegod23.online/api/guard/count/drivers", {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => setCount(res.data.data.count)).catch(e => console.error(e));

        count === 7
            ? dispatch(setParkingSpaceStatus({ isFull: true }))
            : dispatch(setParkingSpaceStatus({ isFull: false }));
    }, []);

    return (
        <>
            <h3 className={s.h3}>На стоянке <span>{count}/7</span></h3>
            {(count === 7) && <p className={s.warning}>Стоянка склада переполнена!</p>}
        </>
    );
};