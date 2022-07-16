import axios from "axios";

import { BACKEND_URL } from "../../../common/constants";
import { TableRow } from "../../../interfaces/table";

interface Reponse {
    hello: string;
}

export const getExcelFileRequest = (
    workData: Array<TableRow>,
    materialData: Array<TableRow>,

) => {
  return axios.post(
    `${BACKEND_URL}/api/v1/get-word-file/`,
    {
      workData: workData,
      materialData: materialData,
    }
  )
    .then((response): Response => {
      return response.data.results;
    })
    .catch(err => console.log(err))
};
