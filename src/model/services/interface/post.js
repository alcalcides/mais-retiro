import api from "./api";

export default async function post(route, data = null, config = null) {
  try {
    const response = await api.post(route, data, config);
    return response;
  } catch (reason) {
    if (reason.response.data) return reason.response.data;
    else throw new Error(reason);
  }
}
