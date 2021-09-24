import React from "react";

// Styles
import { Image } from "./MovieInfoPoster.styles";

const MovieInfoPoster = ({ image, alt }) => (
	<div>
		<Image src={image} alt={alt} />
	</div>
);

export default MovieInfoPoster;
