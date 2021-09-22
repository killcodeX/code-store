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
    openNotificationWithIcon("success", "Post Added Successfully", "");
    return data;
  } catch (error: any) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Adding Post Failed",
        error.response.data.message
      );
    }
  }
};

export const deletePostApi = async (id) => {
  try {
    const { data } = await ApiFunc.delete(`/codestore/delete-post/${id}`);
    openNotificationWithIcon("success", "Post Deleted Successfully", "");
    return data;
  } catch (error: any) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Deleting Post Failed",
        error.response.data.message
      );
    }
  }
};

export const filterPostApi = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/codestore/filter-language`, body);
    return data;
  } catch (error: any) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "filtering post failed",
        error.response.data.message
      );
    }
  }
};
