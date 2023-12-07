import { Link } from "react-router-dom";
import shLogo from "../../assets/img/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
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

          <Link to="/" title="Login" className={styles.linkItem}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
