import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Recharts = ({app}) => {
  const [apiCallData, setApiCallData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/appsData.json");
        setApiCallData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;


  console.log(app);

  return (
    <div className="w-11/12 mx-auto">
        <ComposedChart
          layout="vertical"
          style={{
            width: "100%",
            maxHeight: "70vh",
            aspectRatio: 1 / 1.618,
          }}
          responsive
          data={app}
          margin={{
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category" scale="band" width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
        </ComposedChart>
    </div>
  );
};

export default Recharts;
