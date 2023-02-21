import { createSlice } from "@reduxjs/toolkit";

export const airlineSlice = createSlice({
    name:"airline",
    initialState : {
        airline:[],
        loading:false,
        error:false
    },
    reducers :{
        // GET - API- CALLING
        loadAirlineGetApi : (state) => {
            state.loading = true;
        },
        loadAirlineGetApiSuccess : (state,action) => {
            state.airline = action.payload;
            state.loading = false;

        },
        loadAirlineGetApiFailure : (state,action) => {
            state.airline = action.payload;
            state.loading = false;
        },

        // GET -API -CALLING -ID BASED

        loadAirlineGetApiId : (state) => {
            state.loading = true
        },
        loadAirlineGetApiIdSuccess : (state,action) => {
            console.log("action",action)
            state.airline = action.payload;
            state.loading = false;
        },
        loadAirlineGetApiIdFailure : (state,action) => {
            state.airline = action.payload;
            state.loading = false
        }
    }
})

export const {
    loadAirlineGetApi,
    loadAirlineGetApiSuccess,
    loadAirlineGetApiFailure,
    loadAirlineGetApiId,
    loadAirlineGetApiIdSuccess,
    loadAirlineGetApiIdFailure,
} = airlineSlice.actions;

export default airlineSlice.reducer;