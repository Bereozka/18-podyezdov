export interface Row {
  [k: string]: string | number;

  id: number;
  name?: string;
  units?: string;
  count?: string;
  price?: string;
  percent?: string;
  total?: string;
  title?: string;
};
