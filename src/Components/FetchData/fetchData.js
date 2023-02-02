import axios from "axios";

export async function fetchData(url, setState) {
  let result = await axios.get(url);

  let data = result.data;

  setState(data);
}
