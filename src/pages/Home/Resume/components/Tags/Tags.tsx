import { FC } from 'react'
import { stylesheet as ss } from "./styles";

interface ITags {
	tags: string[]
}

export const Tags: FC<ITags> = ({tags}) => {
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
