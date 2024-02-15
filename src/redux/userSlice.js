import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        displayName:"",
        email:"",
        uid:"",
    },
    reducers:{
        addUser: (state,action)=>{
            return action.payload;
        },
        removeUser: (state,action)=>{
            return null;
        }
    }
})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;