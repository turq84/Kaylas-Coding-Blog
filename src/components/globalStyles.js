import React, { useContext } from "react";
import { useTheme } from "emotion-theming";
import { Global, css } from "@emotion/core";
import Context from "../store/context";

const GlobalStyles = () => {
	const { state } = useContext(Context);
	const theme = useTheme();

	return (
		<Global
			styles={css`
				body {
					background-color: ${state?.isDark
						? theme.dark?.body?.background
						: theme.light?.body?.background};
					color: ${state?.isDark ? theme.dark?.p.color : theme?.light?.p.color};
					transition: all 0.25s linear;
				}

				p {
					color: ${state?.isDark ? theme.dark?.p.color : theme.light?.p.color};
				}
				a {
					color: ${state?.isDark ? theme.dark?.a.color : theme.light?.a.color};
					box-shadow: ${state?.isDark
						? theme.dark?.a.boxShadow
						: theme.light?.a.boxShadow};
				}

				svg {
					fill: ${state?.isDark ? theme.dark?.svg.fill : theme.light?.svg.fill};
				}

				h1 {
					color: ${state?.isDark
						? theme.dark?.h1.color
						: theme.light?.h1.color};
				}
				h2 {
					color: ${state?.isDark
						? theme.dark?.h2.color
						: theme.light?.h2.color};
				}
				h3 {
					color: ${state?.isDark
						? theme.dark?.h3.color
						: theme.light?.h3.color};
				}
				h4 {
					color: ${state?.isDark
						? theme.dark?.h4.color
						: theme.light?.h4.color};
				}
				h5 {
					color: ${state?.isDark
						? theme.dark?.h5.color
						: theme.light?.h5.color};
				}
				h6 {
					color: ${state?.isDark
						? theme.dark?.h6.color
						: theme.light?.h6.color};
				}

				li {
					color: ${state?.isDark
						? theme.dark?.li.color
						: theme.light?.li.color};
				}

				small {
					color: ${state?.isDark
						? theme.dark?.small.color
						: theme.light?.small.color};
				}

				div {
					border-color: ${state?.isDark
						? theme.dark?.div.borderColor
						: theme.light?.div.borderColor};
				}
			`}
		/>
	);
};

export default GlobalStyles;
