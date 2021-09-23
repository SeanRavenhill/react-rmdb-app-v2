import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, alt }) => (
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

export default Thumb;
