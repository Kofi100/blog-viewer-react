import { Link } from "react-router-dom";

export default function PostLinks({
	postDictionary,
	className = "text-start",
}) {
	return (
		<ul className={className}>
			{postDictionary.map((post) => (
				<li key={post.slug}>
					{/* link starts from here,so does transferrring post.slug->/:slug in App.jsx */}
					<Link to={`/post/${post.slug}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
}
