import { Showtime as TShowtime } from "../api/showtime/Showtime";

export const SHOWTIME_TITLE_FIELD = "id";

export const ShowtimeTitle = (record: TShowtime): string => {
  return record.id?.toString() || String(record.id);
};
