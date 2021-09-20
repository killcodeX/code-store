import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export const ApiFunc = axios.create({ baseURL: baseURL });

let token = localStorage.getItem("codeStoretoken");

ApiFunc.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return req;
});



// User Api
export const userRegister = async (body) => {
    try {
      const { data } = await ApiFunc.post(`/codestore/signup`, body);
      return data;
    } catch (error) {
      console.log(error)
    }
  };
  
  export const userLogin = async (body) => {
    try {
      const { data } = await ApiFunc.post(`/codestore/signin`, body);
      return data;
    } catch (error) {
      console.log(error)
    }
  };