import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   addUser: (state, action)=>{
    //ajoute le user au state (firstname + username + token)
   }
 },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;