import { ABOUT_LINKS, SOCIAL_LINKS, COOL_LINKS } from "./Footer.constants";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.label}>About us</div>
          <ul className={styles.linksList}>
            {ABOUT_LINKS.map(({ href, name }, i) => (
              <li key={i} className={styles.link}>
                <a href={href} target="_blank" title={name}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.block} ${styles.block_inline}`}>
          <div>Follow us</div>
          <ul className={styles.linksList}>
            {SOCIAL_LINKS.map(({ href, name, iconClass }, i) => (
              <li key={i} className={styles.link}>
                <a title={name} href={href} rel="me" target="_blank">
                  <i className={`fa ${iconClass} ${styles.iconLink}`}></i>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.block} ${styles.block_inline}`}>
          <ul className={styles.linksList}>
            {COOL_LINKS.map(({ href, name }, i) => (
              <li key={i} className={styles.link}>
                <a href={href} title={name}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
