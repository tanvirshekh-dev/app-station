import axios from "axios";
import { useEffect, useState } from "react";
// import { data } from "react-router";

const useApps = () => {
  const [search, setSearch] = useState("");
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/appsData.json")
      .then((data) => {
        if (search) {
          const term = search.trim().toLocaleLowerCase();
          const searched = data.data?.filter((app) =>
            app.title.toLocaleLowerCase().includes(term)
          );
        //   console.log(searched);
          setApps(searched);
        } else {
          setApps(data.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search]);
  return { apps, loading, error, setLoading, setSearch, search };
};

export default useApps;
