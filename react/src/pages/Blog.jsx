// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import PostLinks from "../components/PostLinks";

const posts = [
	{ slug: "firstBlog", title: "Welcome to My Blog" },
	{ slug: "second-post", title: "Second Post[Deleted]" },
	{ slug: "test", title: "Test blog" },
	{ slug: "fourthSlug", title: "Fourth Post" },
];

export default function Blog() {
	return (
		<section>
			<h1>Blog</h1>
			<h2>Hello!</h2>
			<p>This is a blog website I'm working on.</p>
			<p>
				It works using React.js for the frontend and Express and Node.js for the
				backend.
			</p>
			<p>
				All posts are written in Markdown and stored as .md files on the server.
			</p>
			<Link to="/edit/new">
				<p className="text-center">Create New Post</p>
			</Link>
			<PostLinks postDictionary={posts} />
		</section>
	);
}
