import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, Draft } from "@reduxjs/toolkit";

export interface ParkingSpaceState {
    isFull: boolean;
}

const initialState: ParkingSpaceState = {
    isFull: false,
};

export const parkingSpaceSlice = createSlice({
    name: "parkingSpace",
    initialState,
    reducers: {
        setParkingSpaceStatus: (state: Draft<ParkingSpaceState>, action: PayloadAction<ParkingSpaceState>) => {
            state = action.payload;
        }
    }
});

export const { setParkingSpaceStatus } = parkingSpaceSlice.actions;

export default parkingSpaceSlice.reducer;