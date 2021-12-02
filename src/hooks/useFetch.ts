import { useEffect, useState } from "react";

const useFetch = (path?: string, options?: object) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${process.env.REACT_APP_URL}` + path, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
};

export default useFetch;
