import { useParams } from "react-router-dom";
import { useFetchEventsByCategory } from "../../hooks/useFetchEventsByCategory";
import SearchBox from "../../components/SearchBox/SearchBox";
import EventThumbnail from "../../components/EventThumbnail/EventThumbnail";
import Loader from "../../components/Loader/Loader";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { id } = useParams();
  const { events, loading, error } = useFetchEventsByCategory(id);

  // TODO[JB]: Implement a better error UX/UI,
  // the component will not appear.
  // Maybe a toast could be a good option.
  if (!events || error) return;

  return (
    <div className={styles.container}>
      <SearchBox />
      {loading && <Loader />}
      {!loading && (
        <ul className={styles.wrapper}>
          {events.map((event, i) => (
            <EventThumbnail key={i} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;
