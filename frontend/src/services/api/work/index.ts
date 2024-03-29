import axios from "axios";

import { BACKEND_URL } from "../../../common/constants";
import { WorkModel } from "../../../interfaces/services/api";

export const getListWorks = () => {
  return axios.get(`${BACKEND_URL}/api/v1/work/`)
    .then((response): WorkModel => {
      return response.data.results;
    })
    .catch(err => console.log(err))
};

export const getWork = (id: number | string) => {
  return axios.get(`${BACKEND_URL}/api/v1/work/${id}/`)
    .then((response): WorkModel => {
      return response.data;
    })
    .catch(err => console.log(err))
};
