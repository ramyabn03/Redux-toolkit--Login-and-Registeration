import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: [],
        isRegistered: false,
        isLoggedIn: false,
        currentUser:{}
    },
    reducers:{
        register: (state, action) => {
            const updatedUser = {
                ...action.payload,
                id: new Date().getTime()
            }
            state.user = [...state.user, updatedUser];
            state.isRegistered= !state.isRegistered;
        },
        login: (state, action) => {
            const loginUser = action.payload;
            const existingUser = state.user.find((user) => user.userName === loginUser.userName && user.password === loginUser.password);
            if(existingUser){
                state.isLoggedIn= !state.isLoggedIn
                state.currentUser =existingUser
                
                swal({
                    title: "Login Successfull",
                    text: "Welcome!",
                    icon: "success",
                    timer: 1500
                  });

            } else {
                swal({
                    title: "Oops!",
                    text: "Invalid UserName or Password!",
                    icon: "warning"
                  });
            }
        },
        logout: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        newregister: (state) => {
            state.isRegistered = !state.isRegistered;
        },

        update: (state, action) => {
            const otherUsers = state.user.filter(item => item.id !== action.payload.id);
            state.currentUser = action.payload;
            state.user = [
                ...otherUsers,
                state.currentUser
            ]
        },
    },
});


export const {register, login, logout, update, newregister} = userSlice.actions;


export default userSlice.reducer;