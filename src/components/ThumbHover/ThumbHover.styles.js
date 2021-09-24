import styled from "styled-components";

export const Image = styled.img`
	width: 100%;
	max-width: 720px;
	height: 100%;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	animation: animateThumb 0.5s;

	:hover {
		transform: scale(1.025);
	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
