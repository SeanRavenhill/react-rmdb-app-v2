import React from "react";
import PropTypes from "prop-types";

// Styles
import { Image } from "./MovieInfoPoster.styles";

const MovieInfoPoster = ({ image, alt }) => (
	<div>
		<Image src={image} alt={alt} />
	</div>
);

MovieInfoPoster.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
};

export default MovieInfoPoster;
