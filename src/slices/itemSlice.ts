import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data:[{
        id:"A1",
        name:"Shashank1",
        items:12,
        type:"Sales",
        statistics:"40",
        lastOpened:2,
    },
    {
        id:"A2",
        name:"Shashank2",
        items:12,
        type:"Sales",
        statistics:"20",
        lastOpened:2,
    },
    {
        id:"A3",
        name:"Shashank3",
        items:12,
        type:"Marketing",
        statistics:"12",
        lastOpened:2,
    }],
    
}

const itemSlice = createSlice({
    name:"item",
    initialState:initialState,
    reducers:{
        DeleteData(state:any,value:any){
            const data = value.payload;
            const index = state.Data?.findIndex((item:any) => item.id === data.id);
            if (index >= 0) {
                state.Data.splice(index,1);
            }
        },
        UpdateData(state:any,value:any){
            const data = value.payload;
            const index = state.Data?.findIndex((item:any) => item.id === data.id);
            if (index >= 0) {
                state.Data.splice(index,1,data);
            }
        }
    }
})

export const {DeleteData,UpdateData} = itemSlice.actions;
export default itemSlice.reducer;