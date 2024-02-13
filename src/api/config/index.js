import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 unauthorized error
      console.error("Unauthorized: ", error.response.data);
    } else if (error.response) {
      // Handle other errors
      console.error("Error: ", error.response.data);
    } else if (error.request) {
      // Handle network errors
      console.error("Network error", error.request);
    } else {
      console.error("Error: ", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
