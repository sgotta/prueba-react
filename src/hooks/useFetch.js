import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResource = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchResource(url);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
