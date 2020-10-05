// import router from "./router";

window.axios = require("axios");

window.axios.defaults.baseURL = process.env.VUE_APP_API;

window.axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("gamesoft-token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

window.axios.interceptors.response.use(
  response => {
    // Return a successful response back to the calling service
    return response;
  },
  error => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Logout user if token has expired
    if (
      error.response.status === 401 ||
      error.response.message === "Unauthenticated."
    ) {
      localStorage.removeItem("gamesoft-token");
      localStorage.removeItem("gamesoft-admin");
      return true;
    }
  }
);
