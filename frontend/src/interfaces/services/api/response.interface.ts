export interface Response {
  [k: string]: any;

  count: number;
  next: number | null;
  previous: number | null;
};
