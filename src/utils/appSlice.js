import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers: {
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closemenu:(state)=>{
        state.isMenuOpen=false;
    }
    },
    
   
})
export const{toggleMenu,closemenu}=appSlice.actions;
export default appSlice.reducer