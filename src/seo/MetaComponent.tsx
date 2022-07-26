import { FC } from "react";
import { Helmet } from "react-helmet";

interface IMetaComponent {
	title: string;
	description: string;
	keywords: string;
}

const MetaComponent: FC<IMetaComponent> = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={window.location.href} />
		</Helmet>
	);
};

export default MetaComponent;
