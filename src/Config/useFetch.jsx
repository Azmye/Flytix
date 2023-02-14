import axios from 'axios';
import { useEffect, useState } from 'react';
import ApiConfig from './config';

const useFetch = (endpoint, includes) => {
  const { tmdb_ApiKey, tmdb_baseUrl } = ApiConfig;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`${tmdb_baseUrl}${endpoint}`, {
        params: {
          api_key: tmdb_ApiKey,
          region: 'ID|US',
          append_to_response: `${includes}`,
        },
      });
      return response;
    };

    fetchData()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [endpoint, includes]);

  return { data, error, loading };
};

export default useFetch;
