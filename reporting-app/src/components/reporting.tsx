

import React from "react";
import { useAppSelector } from "host/store/hooks";
import { selectBookingList } from "host/host-slice/bookingSlice";
import { selectUserList } from "host/host-slice/userSlice";
import ReusableBarChart from "./barChart";

const Charts = () => {
  const bookings = useAppSelector(selectBookingList);
  const userList = useAppSelector(selectUserList);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentYear = new Date().getFullYear();

  const parseDate = (date: string | Date) =>
    date instanceof Date ? date : new Date(date.split(",")[0].split("/").reverse().join("-"));

  const countByMonth = <T,>(list: T[], getDate: (item: T) => string | Date | undefined, keyName: string) =>
    months.map((m, i) => ({
      month: `${m} ${currentYear}`,
      [keyName]: list.filter((item) => {
        const d = parseDate(getDate(item) || "");
        return d.getFullYear() === currentYear && d.getMonth() === i;
      }).length,
    }));

  const userData = countByMonth(userList, (u) => u.createdAt, "users");
  const bookingData = countByMonth(bookings, (b: any) => b.createdAt || b.bookingDate, "bookings");

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 50 }}>
        <ReusableBarChart data={userData} heading="Monthly Users" xKey="month" barKeys={[{ key: "users", color: "#8884d8" }]} />
      </div>
      <ReusableBarChart data={bookingData} heading="Monthly Bookings" xKey="month" barKeys={[{ key: "bookings", color: "#82ca9d" }]} />
    </div>
  );
};

export default Charts;
