import axios from "axios";
import { BACKEND_URL } from "../../../common/constants";

export const getListWorks = () => {
  return axios({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/work/`,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(err => console.log(err))
};
