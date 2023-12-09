import { Typeahead } from "react-bootstrap-typeahead";
import { Option } from "react-bootstrap-typeahead/types/types";
import { useState } from "react";
import { useFetchCategories } from "../../hooks/useFetchCategories";

import styles from "./SearchBox.module.scss";

const SearchBox = () => {
  const { loading, error, categories } = useFetchCategories();
  const [category, setCategory] = useState<Option[]>([]);

  // TODO[JB]: Implement a better loading and error UX/UI,
  // as if the data takes longer to load or there is an error,
  // the component will not appear.
  if (!categories || loading || error) return;

  return (
    <form action="#" method="get" className={styles.searchBox}>
      <Typeahead
        id="searchBox"
        labelKey="name"
        onChange={(categorySelected) => setCategory(categorySelected)}
        options={categories}
        placeholder="Search for an event, city, artist or team"
        selected={category}
        className={styles.typeAhead}
      />

      <button type="submit" className={styles.button}>
        <i className="fa fa-search visible-phone"></i>
        <span className={styles.text}>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;
