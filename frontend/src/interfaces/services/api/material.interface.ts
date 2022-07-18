import { Response } from "./response.interface";

export interface MaterialModel {
  [k: string]: any;

  id: number;
  title: string;
  units: string;
  price: number;
  link: string;
  workmaterials: number[];
};

export interface MaterialListResponse extends Response {
  [k: string]: any;

  results: MaterialModel;
};
