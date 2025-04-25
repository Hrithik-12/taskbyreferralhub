// lib/api.js
import axios from 'axios';

const API_BASE_URL = 'http://34.10.166.233';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Something went wrong!' };
  }
};
