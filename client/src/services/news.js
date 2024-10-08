import axios from "axios";

export const createNew = async (path, formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}${path}`,
      formData
    );
    return response.data;
  } catch (error) {}
};

export const getData = async (path) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}${path}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateNew = async (path) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}${path}`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteNew = async (path) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}${path}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
