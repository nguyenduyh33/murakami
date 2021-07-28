import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestConfig, transformData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      transformData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, request };
};

export default useHttp;
