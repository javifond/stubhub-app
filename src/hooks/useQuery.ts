/**
 * Custom hook that builds on useLocation to parse
 * the query string.
 */
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
