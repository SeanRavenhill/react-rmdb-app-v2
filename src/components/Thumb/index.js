import React from "react";

// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, alt }) => (
	<div>
		<Image src={image} alt={alt} />
	</div>
);

export default Thumb;
