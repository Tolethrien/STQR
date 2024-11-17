import type { EventItem, DBResponce } from "@/types/mongoSchema";

export const getDate = (date: Date) => {
  const onCalendar = date.toLocaleDateString("pl-PL").replace(/\//g, ".");
  const onTime = date.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${onCalendar} - ${onTime}`;
};
export const responseToTyped = (data: DBResponce<EventItem>[]) => {
  const convertedData: EventItem[] = data.map((item) => {
    const date = item.date.slice(1, item.date.length - 1);
    return {
      id: item._id,
      capacity: Number(item.capacity),
      date: new Date(date),
      eventName: item.eventName,
      city: item.city,
      street: item.street,
      location: item.location,
      sold: Number(item.sold),
    };
  });
  return convertedData;
};
