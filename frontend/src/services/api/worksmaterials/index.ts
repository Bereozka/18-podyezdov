import axios from "axios";

import { BACKEND_URL } from "../../../common/constants";
import { WorksMaterialsModel } from "../../../interfaces/services/api";


export const getWorksMaterials = (id: number | string) => {
  return axios.get(`${BACKEND_URL}/api/v1/works-materials/${id}/`)
    .then((response): WorksMaterialsModel => {
      return response.data;
    })
    .catch(err => console.log(err))
};
