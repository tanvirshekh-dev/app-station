import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const Recharts = () => {
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

  const result = apiCallData.map(item => {
  return {
    ratings: item.ratings.map(r => ({
      name: r.name,
      count: r.count
    }))
  };
});
  console.log(apiCallData);
  
  return (
    <div className="w-11/12 mx-auto">
      <ResponsiveContainer width="100%" height={450}>
        <BarChart layout="vertical" data={result}>
          <XAxis type="number" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
