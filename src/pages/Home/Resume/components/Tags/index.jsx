import React from "react";
import { stylesheet as ss } from "./styles";

function Tags({ tags }) {
	return (
		<div style={ss.tagsWrap}>
			{tags.map((tag, index) => {
				return (
					<span key={"tag" + index} style={ss.tag}>
						{tag}
					</span>
				);
			})}
		</div>
	);
}

export default Tags;
