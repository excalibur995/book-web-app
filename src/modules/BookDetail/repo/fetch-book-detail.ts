import { API } from "src/models/constants";
import { Book } from "src/models/types";
import { FetchBookParams } from "../models/types";

export default async function fetchBookDetail({ id, signal }: FetchBookParams): Promise<Book> {
  try {
    const req = await fetch(API.BASE + API.BOOKS + `/${id}`, { signal });
    if (!req.ok) {
      throw new Error(`Network response was not ok: ${req.statusText} (${req.status})`);
    }
    const res: Book = await req.json();
    return res;
  } catch (err) {
    throw new Error((err as Error).message);
  }
}
