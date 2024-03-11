import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data!" });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [fetchFn]);

  return { isLoading, error, fetchedData, setFetchedData };
};

export default useFetch;
