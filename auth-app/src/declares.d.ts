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
declare module "host/components/pages/Input" {
  import { ComponentType } from "react";

  const Input: ComponentType<any>; 
  export default Input;
}
declare module "host/components/pages/Modal" {
  import { ComponentType } from "react";

  const Modal: ComponentType<any>; 
  export default Modal;
}
declare module "host/store/hooks" {
  import { TypedUseSelectorHook } from "react-redux";
  import { RootState, AppDispatch } from "host/store";
  export const useAppDispatch: () => AppDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState>;
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

  export const addUser: (payload: Booking) => PayloadAction<UserInterface>;
  export const deleteUser: (payload: UserInterface) => PayloadAction<UserInterface>;
  export const userLogin: (payload: boolean) => PayloadAction<boolean>;
  export const selectUserList: (state: RootState) => UserInterface[];
  const reducer: any;
  export default reducer;
}