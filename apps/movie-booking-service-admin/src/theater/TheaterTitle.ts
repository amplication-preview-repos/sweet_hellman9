import { Theater as TTheater } from "../api/theater/Theater";

export const THEATER_TITLE_FIELD = "id";

export const TheaterTitle = (record: TTheater): string => {
  return record.id?.toString() || String(record.id);
};
