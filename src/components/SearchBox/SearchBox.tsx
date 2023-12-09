import { Typeahead } from "react-bootstrap-typeahead";
import { Option } from "react-bootstrap-typeahead/types/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { API_ENDPOINTS } from "../../api/endpoints";
import { ICategory } from "../../interfaces/ICategory";

import styles from "./SearchBox.module.scss";

const SearchBox = () => {
  const { loading, error, categories } = useFetchCategories();
  const [category, setCategory] = useState<Option[]>([]);
  const navigate = useNavigate();

  // TODO[JB]: Implement a better loading and error UX/UI,
  // as if the data takes longer to load or there is an error,
  // the component will not appear.
  if (!categories || loading || error) return;

  const onCategorySelected = () => {
    const selectedCategory = category[0] as ICategory;
    const selectedCategoryId = selectedCategory.id;

    navigate(
      `/${API_ENDPOINTS.CATEGORIES}/${selectedCategoryId}/${API_ENDPOINTS.EVENTS}`
    );
  };

  return (
    <div className={styles.searchBox}>
      <Typeahead
        id="searchBox"
        labelKey="name"
        onChange={(categorySelected) => setCategory(categorySelected)}
        options={categories}
        placeholder="Search for an event, city, artist or team"
        selected={category}
        className={styles.typeAhead}
      />

      <button
        className={styles.button}
        onClick={onCategorySelected}
        disabled={category.length === 0}
      >
        <i className="fa fa-search visible-phone"></i>
        <span className={styles.text}>Search</span>
      </button>
    </div>
  );
};

export default SearchBox;
