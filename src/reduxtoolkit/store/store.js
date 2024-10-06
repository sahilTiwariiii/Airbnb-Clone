import LoginandRegisterModelSlice from "../features/LoginandRegisterModelSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store =configureStore({
    reducer:{
        loginandregister:LoginandRegisterModelSlice // key 'loginandregister' for accessing the state
    }
})