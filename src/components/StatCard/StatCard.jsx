const StatCard = ({ label, min, max, unit }) => {
    return (
        <div>
            <h2>{label}</h2>
            <p>
                Maximum {label} recorded : {max} {unit}
            </p>
            <p>
                Minimum {label} recorded : {min} {unit}
            </p>
        </div>
    );
};

export default StatCard;
