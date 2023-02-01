import axios from "axios";

export async function fetchAPI(url, setState) {
  let result = await axios.get(url);
  let data = result.data;
  let dataReturn = Object.entries(data);

  setState(dataReturn);
}
