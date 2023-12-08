import SearchBox from "../../components/SearchBox/SearchBox";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main>
      <div className={styles.bigBox}>
        <div className={styles.container}>
          <SearchBox />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
