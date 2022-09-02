import { useEffect, useState } from 'react';
import { request } from '../utills';

function useFetch(uri, options) {
  const [body, setBody] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await request(uri, options);
      setBody(data);
    };
    fetchData();
  }, [uri, options]);

  return body;
}

export default useFetch;
