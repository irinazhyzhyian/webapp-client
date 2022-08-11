import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (apiDto, callApi, callAfterResponse) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchData = async (cancelToken) => {
    setLoading(true);
    try {
      if(apiDto !== null) {
        const apiResponse = await callApi(cancelToken, apiDto);
        setResponse(apiResponse);
        setIsEmpty(apiResponse.isEmpty)
        setError(null);
        if(callAfterResponse) {
          callAfterResponse(apiResponse);
        }
      }
    } catch (exception) {
        if (!axios.isCancel(exception))
          setError(exception);       
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchData(cancelToken);
    return () => cancelToken.cancel('Request canceled by the user');
  }, [apiDto]);

  return { response, error, loading, isEmpty };
};

export default useAxios;