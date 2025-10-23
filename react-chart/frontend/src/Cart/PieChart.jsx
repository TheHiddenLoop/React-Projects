import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";
import axios from "axios";

export const PieChart = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/lookup");
      setData(res.data.map((e) => ({ ...e._id, count: e.count })));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const options = {
    data: data,
    title: {
      text: "Category of Products",
      fontSize: 20,
      fontWeight: "bold",
      color: "#1e293b",
    },
    series: [
      {
        type: "pie",
        angleKey: "count",
        legendItemKey: "name",

      },
    ],
  };

  return <AgCharts options={options} />;
};
