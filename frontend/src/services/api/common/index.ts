import axios from "axios";

import { BACKEND_URL } from "../../../common/constants";
import { TableRow } from "../../../interfaces/table";

const FileDownload = require('js-file-download');

export const getWordFileRequest = (
    workData: Array<TableRow>,
    materialData: Array<TableRow>,

) => {
  return axios({
    url: `${BACKEND_URL}/api/v1/get-word-file/`,
    method: "POST",
    responseType: 'blob', // Important
    data: {
      workData: workData,
      materialData: materialData,
    }})
      .then((response): any => {
        FileDownload(response.data, 'file.docx');
      })
      .catch(err => console.log(err));
};

