import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('fishbeatsuser') ? JSON.parse(localStorage.getItem('fishbeatsuser'))
        : {
            user: null,
            isAuth: false
        },
    reducers: {
        LonIn(state, action) {
            const data = { ...state, user: action.payload, isAuth: true }
            localStorage.setItem('fishbeatsuser', JSON.stringify(data))
            return data;
        },
        LogOut(state, action) {
            const data = { ...state, user: null, isAuth: false }
            localStorage.setItem('fishbeatsuser', JSON.stringify(data))
            return data;
        }
    }
})
export const { LonIn, LogOut } = UserSlice.actions;
export default UserSlice.reducer;