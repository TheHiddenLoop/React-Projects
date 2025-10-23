import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";
import axios from "axios";

export const BarChart = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/lowstock");
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const options = {
        title: {
            text: "Low stock details",
            fontSize: 20,
            fontWeight: "bold",
            color: "#1e293b",
        },
        data: data,
        series: [
            {
                type: "donut",
                calloutLabelKey: "name",
                angleKey: "quantity",

            }
        ],
    };

    return <AgCharts options={options} />;
};
