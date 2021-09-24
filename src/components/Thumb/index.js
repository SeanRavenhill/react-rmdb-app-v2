import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Thumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool,
	alt: PropTypes.string,
};

export default Thumb;
