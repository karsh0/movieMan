import axios from 'axios';
import { useEffect, useState } from 'react';


const options = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/advancedsearch',
  params: {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '6',
    max_imdb: '7.8',
    genre: 'action',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': 'c6305b3a08msh15afaa54f44fd4ep14b051jsn30a30468e4a0',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com'
  }
};


export function useContents() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContents() {
      try {
        const response = await axios.request(options);
        setContents(response.data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchContents();
  }, []); // Empty dependency array to ensure it runs only once

  return { contents, loading };
}