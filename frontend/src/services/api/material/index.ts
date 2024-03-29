import axios from "axios";

import { BACKEND_URL } from "../../../common/constants";
import { MaterialModel } from "../../../interfaces/services/api";

export const getListMaterials = () => {
  return axios.get(`${BACKEND_URL}/api/v1/material/`)
    .then((response): Array<MaterialModel> => {
      return response.data.results;
    })
    .catch(err => console.log(err))
};

export const getMaterial = (id: number) => {
  return axios.get(`${BACKEND_URL}/api/v1/material/${id}/`)
    .then((response): MaterialModel => {
      return response.data;
    })
    .catch(err => console.log(err))
};
