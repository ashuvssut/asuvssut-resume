import React  from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import styles from "./home.module.scss";

import { stylesheet as ss } from "./styles";
import Resume from "./Resume";

function Home() {
  return (
		<div className={styles.root}>
			<MetaComponent
				title={metaData.home.title}
				description={metaData.home.description}
				keywords={metaData.home.keywords}
			/>
			<div className={styles.pageWrap}>
				<div style={ss.page}>
					<div style={ss.content}>
						<Resume />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
