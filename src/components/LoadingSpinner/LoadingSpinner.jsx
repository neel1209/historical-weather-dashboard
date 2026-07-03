import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner} />
            <span className={styles.label}>Loading...</span>
        </div>
    );
};

export default LoadingSpinner;
