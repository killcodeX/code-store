import { ApiFunc } from "./userApi";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};


export const getAllPostApi = async () => {
    try {
      const { data } = await ApiFunc.get(`/codestore/get-all-posts`);
      return data;
    } catch (error: any) {
      if (error.response) {
        openNotificationWithIcon(
          "error",
          "Fetching All Posts Failed",
          error.response.data.message
        );
      }
    }
  };

  export const createPostApi = async (body) => {
    try {
      const { data } = await ApiFunc.post(`/codestore/create-post`, body);
      return data;
    } catch (error: any) {
      if (error.response) {
        openNotificationWithIcon(
          "error",
          "Adding Posts Failed",
          error.response.data.message
        );
      }
    }
  };