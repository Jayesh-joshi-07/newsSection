import axios from 'axios';

const API_KEY = '22aa38c26114447fbcec84ec96e652ae';
const BASE_URL = 'https://newsapi.org/v2/everything';

const MAX_RETRIES = 3; // Number of retries
const RETRY_DELAY = 2000; // Delay between retries in milliseconds

export const getCryptoNews = async () => {
  let attempts = 0;
  
  while (attempts < MAX_RETRIES) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: '(cryptocurrency OR crypto OR blockchain OR bitcoin OR ethereum) AND (investment OR trading OR market)',
          sortBy: 'publishedAt',
          language: 'en',
          domains: 'wsj.com,forbes.com,bloomberg.com,coindesk.com,cointelegraph.com',
          pageSize: 20,
          apiKey: API_KEY,
        },
      });
      return response.data.articles;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Log detailed error response
          console.error(`Error fetching news: ${error.response.status} ${error.response.statusText}`);
        } else {
          console.error('Error fetching news: No response received');
        }
        if (error.response && error.response.status === 429) {
          console.warn(`Rate limit exceeded. Retrying in ${RETRY_DELAY}ms...`);
          attempts++;
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        } else {
          console.error('Error fetching cryptocurrency news:', error.message);
          return [];
        }
      } else {
        console.error('Unexpected error:', error);
        return [];
      }
    }
  }

  console.error('Max retries reached. Failed to fetch news.');
  return [];
};


// import axios from 'axios';

// const BACKEND_URL = 'http://your-backend-url/api/crypto'; // Replace with your backend URL

// export const getCryptoNews = async () => {
//   try {
//     const response = await axios.get(BACKEND_URL);
//     return response.data; // Assuming the backend sends back the relevant data
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('Error fetching data from backend:', error.message);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//     return [];
//   }
// };
