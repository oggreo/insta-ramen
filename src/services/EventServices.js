import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/reo911gt3/insta-ramen",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents(perPage, page) {
    return apiClient.get("/ramens?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return apiClient.get("/ramens/" + id);
  }
};
