import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../host-slice/bookingSlice"; // remote slice
import userReducer from "../host-slice/userSlice"; // remote slice

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
