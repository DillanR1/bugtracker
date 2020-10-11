import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"auth",
    initialState:{
    admin:false,
    Loggedin:false,
    },
    reducers:{
        signIn:(state, action) => {
            const {name,password} = action.payload;
            state.Loggedin = true;
            state.admin = true;
        },
        signOut:(state) => {
            state.Loggedin = false;
            state.admin = false;

        },
        createUser:(state, action) => {

        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;