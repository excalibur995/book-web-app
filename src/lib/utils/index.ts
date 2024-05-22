import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString?: string): string {
  const date = dayjs(dateString);
  if (!date.isValid()) {
    throw new Error("Invalid date string");
  }
  return date.utc().format("DD MMMM YYYY");
}
