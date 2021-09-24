import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Image } from "./ThumbHover.styles";

const ThumbHover = ({ image, movieId, clickable, alt }) => (
	<div>
		{clickable ? (
			<Link to={`/${movieId}`}>
				<Image src={image} alt={alt} />
			</Link>
		) : (
			<Image src={image} alt={alt} />
		)}
	</div>
);

export default ThumbHover;
