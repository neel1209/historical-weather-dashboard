import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
    return (
        <div className={styles.errorMessage}>
            <span className={styles.icon}>!</span>
            <span>{error.message}</span>
        </div>
    );
};

export default ErrorMessage;
