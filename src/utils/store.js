import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import SearchSlice from "./SearchSlice"
import videoinfo from "./videoInfo";
import chatSlice from "./chatSlice";



const store= configureStore({
    reducer:{
        app:appSlice,
        search:SearchSlice,
        details: videoinfo,
        chat:chatSlice,
    }

})
export default store