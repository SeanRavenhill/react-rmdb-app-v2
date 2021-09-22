import React, { useState, useEffect } from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMG_BASE_URL } from "../config";

// Components

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {

  const { state, load, error } = useHomeFetch();

	console.log(state);

	return <div>Home Page</div>;
};

export default Home;
