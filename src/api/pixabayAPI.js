import axios from 'axios';

const API_KEY = '29966506-3ac2aa6cf44b4238878b6f625';

axios.defaults.baseURL = `https://pixabay.com/api`;
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// const params = {
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

export const fetchImages = (searchQuery, page) => {
  const urlAXIOS = `/?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = axios.get(urlAXIOS);
  return response.data.hits;
};
