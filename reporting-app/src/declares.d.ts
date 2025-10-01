declare module "host/store/hooks" {
  import { TypedUseSelectorHook } from "react-redux";
  import { RootState, AppDispatch } from "host/store";
  export const useAppDispatch: () => AppDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState>;
}

declare module "host/host-slice/bookingSlice" {
  import { PayloadAction } from "@reduxjs/toolkit";
  import { RootState } from "host/store";

  export interface Booking {
    id: string;
    customer: string;
    date: string;
  }

  export const addBooking: (payload: Booking) => PayloadAction<Booking>;
  export const selectBookingList: (state: RootState) => Booking[];
  const reducer: any;
  export default reducer;
}


declare module "host/host-slice/userSlice" {
  import { PayloadAction } from "@reduxjs/toolkit";
  import { RootState } from "host/store";

  export interface UserInterface {
    id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
  }

  export const addUser: (payload: addUser) => PayloadAction<UserInterface>;
  export const selectUserList: (state: RootState) => UserInterface[];
  const reducer: any;
  export default reducer;
}