import React from "react";
import Productive from "../Componentes/Productive";
import Statistic from "../Componentes/Statistic";
import useApps from "../Hooks/useApps";

const Home = () => {

const {loading, apps} = useApps()

    const trendingApps = apps.slice(0, 8); 

  return (
    <div className="">
      <section>
        <Productive></Productive>
      </section>
      <section>
        <Statistic></Statistic>
      </section>
    </div>
  );
};

export default Home;
