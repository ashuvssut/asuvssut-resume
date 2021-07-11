import React from 'react'

import { stylesheet as ss } from "./styles";

function Link(props) {
  return (
		<a target="_blank" rel="noreferrer" href={props.href} style={ss.a}>
			{props.children}
		</a>
	);
}

export default Link

