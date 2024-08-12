// import { createSlice } from "@reduxjs/toolkit";

// const initialstate={
//      status:false,
//      userdata:null
// }

// const authSlice=createSlice({
//      name:'auth',
//      initialstate,
//      reducers:{
//           login:(state,action)=>{
//                     state.status=true
//                     state.userdata=action.payload.userdata
//           },
//           logout:(state)=>{
//                     state.status=false
//                     state.userdata=null
//           }
//      }

// })



// export const {login,logout}= authSlice.actions;

// const red=authSlice.reducer
// export default red;


// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Example slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:false,
    user: null
  },
  reducers: {
    setUser(state, action) {
     state.status=true
      state.user = action.payload;
      
    },
    clearUser(state) {
     state.status=false
      state.user = null;
    }
  }
});

export const { clearUser,setUser } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // Add other reducers here if needed
  }
});

export default store;
