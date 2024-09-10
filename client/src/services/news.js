import axios from "axios";

export const getData = async (path) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}${path}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
