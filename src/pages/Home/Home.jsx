import React  from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import ResumePage from "./ResumePage";

import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.root}>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />
      <ResumePage />
    </div>
  );
}

export default Home;
