import { useContext } from "react";
import { FetchCategoriesContext } from "../context/FetchCategoriesContext";

export const useFetchCategories = () => {
  const context = useContext(FetchCategoriesContext);

  if (!context) {
    throw new Error(
      "useFetchCategories must be used within a FetchCategoriesProvider"
    );
  }

  return context;
};
