export interface BaseApiParams {
  signal: AbortSignal;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
  isUserAddedBook?: boolean;
}
