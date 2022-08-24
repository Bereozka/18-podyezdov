import { Response } from "./response.interface";

export interface WorksMaterialsModel {
  [k: string]: any;

  id: number;
  work: number;
  material: number;
  count: number
};
