const API_BASE_URL = '/api'; // Now using your local proxy route

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/proxy-register`, formData);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Something went wrong!' };
  }
};
