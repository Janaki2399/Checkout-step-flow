import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<unknown>(null); //use generics
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setResponse(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, response, isError };
};

export default useFetch;
