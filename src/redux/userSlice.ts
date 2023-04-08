import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, Draft } from "@reduxjs/toolkit";

export interface UserState {
    token: string;
    role: string;
}

const initialState: UserState = {
    token: "",
    role: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state: Draft<{ token: string, role: string }>, action: PayloadAction<{ token: string, role: string }>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem("token", state.token);
            localStorage.setItem("role", state.role);
        },
        clearUser: (state) => {
            state.token = "";
            state.role = "";
            localStorage.clear();
        }
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;