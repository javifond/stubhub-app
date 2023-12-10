import SearchBox from "../../components/SearchBox/SearchBox";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.bigBox}>
      <div className={styles.container}>
        <SearchBox />
      </div>
    </div>
  );
};

export default HomePage;
