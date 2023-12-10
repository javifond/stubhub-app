import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <i className={`fa fa-spinner ${styles.icon}`} />
    </div>
  );
};

export default Loader;
