import styles from "./StatCard.module.css";

const StatCard = ({ label, min, max, unit }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{label}</h2>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.value}>
                        {max} {unit}
                    </span>
                    <span className={styles.statLabel}>
                        Maximum {label} recorded
                    </span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.value}>
                        {min} {unit}
                    </span>
                    <span className={styles.statLabel}>
                        Minimum {label} recorded
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
