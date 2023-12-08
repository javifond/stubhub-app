import styles from "./SearchBox.module.scss";

const SearchBox = () => {
  return (
    <form action="#" method="get" className={styles.searchBox}>
      <input
        name="query"
        autoComplete="off"
        className={styles.input}
        placeholder="Search for an event, city, artist or team"
        type="text"
      />
      <button type="submit" className={styles.button}>
        <i className="fa fa-search visible-phone"></i>
        <span className={styles.text}>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;
