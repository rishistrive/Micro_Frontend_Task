// host/src/slice/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}

interface UserState {
  list: User[];
  loggedIn:boolean;
}

const initialState: UserState = {
  list: [],
  loggedIn:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      console.log(action.payload, 'action.payload')
      state.list?.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.list = state.list.filter((value) => value.id != action.payload.id);
    },
    userLogin : (state,action:PayloadAction<boolean>)=>{
      state.loggedIn = action.payload

    }

  },
});

export const { addUser, deleteUser,userLogin } = userSlice.actions;

// Selector for convenience
export const selectUserList = (state: RootState) => state.user.list;
export const selectUserLoggedIn = (state: RootState) => state.user.loggedIn;

export default userSlice.reducer;
