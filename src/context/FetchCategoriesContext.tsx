import { createContext, ReactElement, useState, useEffect } from "react";
import { ICategory } from "../interfaces/ICategory";
import { API_ENDPOINTS } from "../api/endpoints";

type FetchCategoriesContextProps = {
  categories: ICategory[] | null;
  loading: boolean;
  error: string | null;
};

export const FetchCategoriesContext = createContext<
  FetchCategoriesContextProps | undefined
>(undefined);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const FetchCategoriesProvider = ({ children }: ChildrenType) => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async (): Promise<ICategory[]> => {
      const categories = await fetch(
        `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.CATEGORIES}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${res.status}`
            );
          }

          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
          setError(err.message);
          setCategories(null);
        })
        .finally(() => {
          setLoading(false);
        });

      return categories;
    };

    fetchCategories().then((categories) => {
      setCategories(categories);
      setError(null);
    });
  }, []);

  const contextValue: FetchCategoriesContextProps = {
    categories,
    loading,
    error,
  };

  return (
    <FetchCategoriesContext.Provider value={contextValue}>
      {children}
    </FetchCategoriesContext.Provider>
  );
};
