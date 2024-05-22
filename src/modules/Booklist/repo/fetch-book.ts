import { API } from "src/models/constants";
import { BaseApiParams, Book } from "src/models/types";

export default async function fetchBooks({ signal }: BaseApiParams): Promise<Book[]> {
  try {
    const req = await fetch(API.BASE + API.BOOKS, { signal });
    if (!req.ok) {
      throw new Error(`Network response was not ok: ${req.statusText} (${req.status})`);
    }
    const res: Book[] = await req.json();
    return res;
  } catch (err) {
    throw new Error((err as Error).message);
  }
}
