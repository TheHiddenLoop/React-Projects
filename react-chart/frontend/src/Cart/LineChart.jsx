import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";
import axios from "axios";

function getMonthName(monthNumber) {
    const date = new Date(2000, monthNumber - 1, 1);
    return date.toLocaleString("en-US", { month: "short" });
}

export const LineChart = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/monthly");
            const formatted = res.data.map((d) => ({
                month: getMonthName(d._id),
                value: d.value,
            }));
            setData(formatted);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const options = {
        title: {
            text: "Monthly stock value trend",
            fontSize: 20,
            fontWeight: "bold",
            color: "#1e293b",
        },
        data: data,
        axes: [
            {
                type: "category",
                position: "bottom",
                label: {
                    rotation: -45,
                    fontSize: 12,
                    color: "#475569",
                },
                line: {
                    stroke: "#94a3b8",
                },
            },
            {
                type: "number",
                position: "left",
                label: {
                    fontSize: 12,
                    color: "#475569",
                },
                line: {
                    stroke: "#94a3b8",
                },
            },
        ],
        series: [
            {
                type: "line",
                xKey: "month",
                yKey: "value",
                yName: "Stock Value",
                stroke: "#3b82f6",
                strokeWidth: 3,
                marker: {
                    enabled: true,
                    shape: "circle",
                    size: 8,
                    fill: "#1d4ed8",
                    stroke: "#fff",
                    strokeWidth: 2,
                },
                label: {
                    enabled: true,
                    fontSize: 12,
                    color: "#111827",
                },
            },
        ],
    };

    return <AgCharts className="bg-blue-400" options={options} />;
};
