import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { APP_ROUTES } from "../../routes/routes.constants";
import shLogo from "../../assets/img/logo.svg";

import styles from "./Header.module.scss";
import { getRandomUserId } from "../../utilities/getRandomUserId";

const Header = () => {
  const [logged, setLogged] = useState<boolean>(false);
  const { setUserId } = useLoggedUser();

  // HACK[JB]: This handler, mimics a mechanism
  // where we will get a user that is logged in,
  // requesting the data to an endpoint.
  // It is only implemented for the home-test purpose.
  const onLoginHandler = () => {
    const randomUserId = getRandomUserId(1, 10);

    setUserId(!logged ? randomUserId : null);
    setLogged(!logged);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" title="Frontend Test | Stubhub">
          <img
            src={shLogo}
            alt="Frontend Test | Stubhub"
            className={styles.logo}
          />
        </Link>
        <nav className={styles.navigation}>
          <Link to="/" title="Help" className={styles.linkItem}>
            Help
          </Link>

          {logged && (
            <Link
              to={APP_ROUTES.ACCOUNT}
              title="Account"
              className={styles.linkItem}
            >
              Account
            </Link>
          )}

          <button className={styles.button} onClick={onLoginHandler}>
            {logged ? "Logout" : "Login"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
