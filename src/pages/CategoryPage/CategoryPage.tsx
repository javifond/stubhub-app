import SearchBox from "../../components/SearchBox/SearchBox";
import EventThumbnail from "../../components/EventThumbnail/EventThumbnail";

import { MOCK_EVENTS } from "../../mockData/events";

import styles from "./CategoryPage.module.scss";

// TODO[JB]: Implement a loading state when we request
// the data.
const CategoryPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <SearchBox />

        <ul>
          {MOCK_EVENTS.map((event, i) => (
            <EventThumbnail key={i} event={event} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CategoryPage;
