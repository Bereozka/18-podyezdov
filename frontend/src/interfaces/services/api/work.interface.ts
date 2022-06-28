import { Response } from "./response.interface";

export interface WorkModel {
  [k: string]: any;

  id: number;
  title: string;
  units: string;
  price: number;
  price_staff: number;
  workmaterials: string[];
};

export interface WorksListResponse extends Response {
  [k: string]: any;

  results: WorkModel;
};
