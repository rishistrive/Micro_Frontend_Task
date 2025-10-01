// host/src/slice/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Booking {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}

interface BookingState {
  list: Booking[];
}

const initialState: BookingState = {
  list: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      console.log(action.payload,'action.payload')
      state.list?.push(action.payload);
    },
deleteBooking: (state, action: PayloadAction<Booking>) => {
  state.list = state.list.filter((value) => value.id != action.payload.id);
},

  },
});

export const { addBooking, deleteBooking } = bookingSlice.actions;

// Selector for convenience
export const selectBookingList = (state: RootState) => state.booking.list;

export default bookingSlice.reducer;
