import { useQuery } from 'react-query';

function useData() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3001/db').then((res) => res.json())
  );

  return { isLoading, error, data };
}

export default useData;
