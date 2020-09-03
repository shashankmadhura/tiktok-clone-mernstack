import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokbackendmern.herokuapp.com/",
});

export default instance;
