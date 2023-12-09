import { useParams } from "react-router-dom";
import { useFetchEventsByCategory } from "../../hooks/useFetchEventsByCategory";
import SearchBox from "../../components/SearchBox/SearchBox";
import EventThumbnail from "../../components/EventThumbnail/EventThumbnail";

import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { id } = useParams();
  const { events, loading, error } = useFetchEventsByCategory(id);

  // TODO[JB]: Implement a better loading and error UX/UI,
  // as if the data takes longer to load or there is an error,
  // the component will not appear.
  if (!events || loading || error) return;

  return (
    <main>
      <div className={styles.container}>
        <SearchBox />

        <ul className={styles.wrapper}>
          {events.map((event, i) => (
            <EventThumbnail key={i} event={event} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CategoryPage;
