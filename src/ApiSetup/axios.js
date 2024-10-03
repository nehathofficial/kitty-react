import axios from "axios";
import swal from "sweetalert";
import Cookies from "js-cookie";

const BASE_URL = "https://infowarescripts.com/dev/kittyapp/";

const instance = axios.create({
  baseURL: BASE_URL + "api/",
});

const onRequestSuccess = (config) => {
  // Insert authorization token on request call
  const auth_token = Cookies.get("auth_token");
  if (auth_token) config.headers["Authorization"] = "Bearer " + auth_token;

  return config;
};
const onRequestFailure = (error) => Promise.reject(error);

const onResponseSuccess = (response) => response;
const onResponseFailure = (error) => {
  if (error.response) {
    //console.log('response', error.response);
    if (
      error.response.status === 401 &&
      error.response.data.message == "Token has expired"
    ) {
      //console.log('AAAA');
      swal(error.response.data.message, {
        icon: "warning",
        timer: 5000,
      }).then(() => {
        Cookies.remove("user");
        Cookies.remove("auth_token");
        window.location.reload(false);
      });
    } else if (
      error.response.status === 400 &&
      error.response.data.token_exp_invalid
    ) {
      //console.log('BBB');
      swal(error.response.data.token_exp_invalid, {
        icon: "warning",
        timer: 5000,
      }).then(() => {
        // store.dispatch(authLogout);
        window.location.reload(false);
      });
    }
    //console.log('CCC');
    return Promise.reject(error.response);
  } else {
    const customMsg =
      "Server is taking longer time to respond, please try again later.";
    swal(customMsg, {
      icon: "warning",
      timer: 5000,
    }).then(() => {
      Cookies.remove("user");
      Cookies.remove("auth_token");
      window.location.reload(false);
    });
    return Promise.reject({
      data: {
        // message : message
      },
    });
  }
};

// Add a request interceptor
instance.interceptors.request.use(onRequestSuccess, onRequestFailure);

// Add a response interceptor
instance.interceptors.response.use(onResponseSuccess, onResponseFailure);

export default instance;
