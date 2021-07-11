import React from "react";

import {stylesheet as ss} from './styles'

function Section({ title, children }) {
	return (
		<div style={ss.section}>
      <h2 style={ss.title}>{title}</h2>
			{children}
		</div>
	);
}

export default Section;
