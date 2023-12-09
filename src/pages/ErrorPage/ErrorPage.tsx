import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../routes/routes.constants";

import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={APP_ROUTES.HOME} className={styles.link}>
        Go back home
      </Link>
    </div>
  );
}
