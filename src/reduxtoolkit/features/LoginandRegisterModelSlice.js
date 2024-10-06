const { createSlice } = require("@reduxjs/toolkit");

const LoginandRegisterModelSlice=createSlice({
    // name of reducer which we will see into 'Redux Devtool'
    name:"loginandregistermodel",
    initialState:false,
    reducers:{
        // Action for Open model
        openModel:(state)=>true,
        // Action for Close model
        closeModel:(state)=>false,
    }
})

export const {openModel,closeModel}=LoginandRegisterModelSlice.actions
export default LoginandRegisterModelSlice.reducer