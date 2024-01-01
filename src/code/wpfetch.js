import axios from 'axios';

export async function fetchPosts() {
  // Url de l'API
  const apiUrl = 'https://gftnth00.mywhc.ca/tim01/wp-json/wp/v2/posts/?per_page=100';
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}