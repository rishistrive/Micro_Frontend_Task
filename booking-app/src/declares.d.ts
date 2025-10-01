declare module "host/components/pages/Table" {
  import { ComponentType } from "react";

  const Table: ComponentType<any>; 
  export default Table;
}
declare module "host/components/pages/Button" {
  import { ComponentType } from "react";

  const Button: ComponentType<any>; 
  export default Button;
}
declare module "host/components/pages/Modal" {
  import { ComponentType } from "react";

  const Modal: ComponentType<any>; 
  export default Modal;
}
declare module "host/components/pages/Input" {
  import { ComponentType } from "react";

  const Input: ComponentType<any>; 
  export default Input;
}

declare module "host/store/hooks" {
  import { TypedUseSelectorHook } from "react-redux";
  import { RootState, AppDispatch } from "host/store";
  export const useAppDispatch: () => AppDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState>;
}

declare module "host/host-slice/bookingSlice" {
  import { PayloadAction } from "@reduxjs/toolkit";
  import { RootState } from "host/store";

  export interface BookingInterface {
    id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
  }

  export const addBooking: (payload: Booking) => PayloadAction<Booking>;
  export const deleteBooking: (payload: Booking) => PayloadAction<Booking>;
  export const selectBookingList: (state: RootState) => Booking[];
  const reducer: any;
  export default reducer;
}
