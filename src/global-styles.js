import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html,
	#root,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: Andale Mono,AndaleMono,monospace;
	}

	@media screen and (min-aspect-ratio: 2/3) {
		overflow: hidden;
	}
`;
