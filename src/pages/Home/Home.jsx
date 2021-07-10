import React  from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import Banner from "./sections/Banner/Banner";

import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.root}>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />
      <Banner />
    </div>
  );
}

export default Home;
