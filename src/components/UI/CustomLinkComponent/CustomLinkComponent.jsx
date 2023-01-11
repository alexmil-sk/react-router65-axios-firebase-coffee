import { Link, useMatch } from "react-router-dom";

export default function CustomLinkComponent({ to, children, ...props }) {

	const match = useMatch(to);
	return (
		<Link
			to={to}
			className={match ? 'active-link' : null}
			{...props}
		>
			{children}
		</Link>
	)
}