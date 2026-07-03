import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import styles from "./WeatherChart.module.css";

const WeatherChart = ({ data, title, unit, minColor, maxColor }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <ResponsiveContainer width="100%" aspect={1.618} maxHeight={500}>
                <LineChart
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--color-border-3)"
                    />
                    <XAxis dataKey="date" stroke="var(--color-text-3)" />
                    <YAxis stroke="var(--color-text-3)" unit={unit} />
                    <Tooltip
                        cursor={{
                            stroke: "var(--color-border-2)",
                        }}
                        contentStyle={{
                            backgroundColor: "var(--color-surface-raised)",
                            borderColor: "var(--color-border-2)",
                        }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="max"
                        stroke={maxColor}
                        dot={{
                            fill: "var(--color-surface-base)",
                        }}
                        activeDot={{
                            r: 8,
                            stroke: "var(--color-surface-base)",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="min"
                        stroke={minColor}
                        dot={{
                            fill: "var(--color-surface-base)",
                        }}
                        activeDot={{ stroke: "var(--color-surface-base)" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherChart;
