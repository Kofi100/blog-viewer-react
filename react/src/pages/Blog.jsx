// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import PostLinks from "../components/PostLinks";
import { Fragment } from "react";
import Post from "./Post";
import EditPost from "./EditPost";
import { Routes, Route, Outlet } from "react-router-dom";

const posts = [
	{ slug: "firstBlog", title: "Welcome to My Blog" },
	{ slug: "second-post", title: "Second Post[Deleted]" },
	{ slug: "test", title: "Test blog" },
	{ slug: "fourthSlug", title: "Fourth Post" },
];

export default function Blog() {
	return (
		// <Routes>
		// 	<Route path="/blog" element={<Layout />}></Route>
		// 	<Route path="/post/:slug" element={<Post />} />
		// 	<Route path="/edit/:slug" element={<EditPost />} />
		// </Routes>
		<div className="flex flex-row min-h-[38rem]">
			<section className="flex flex-col w-[50%]">
				<section>
					<h1>Blog</h1>
					<h2>Hello!</h2>
					<p>This is a blog website I'm working on.</p>
					<p>
						It works using React.js for the frontend and Express and Node.js for
						the backend.
					</p>
					<p>
						All posts are written in Markdown and stored as .md files on the
						server.
					</p>

					<Link to="/edit/new">
						<p className="">Create New Post</p>
					</Link>

					<PostLinks
						postDictionary={posts}
						className="pl-0"
						// style={{ paddingLeft: 0 }}
						//mdn width;
					/>
				</section>
			</section>
			<section className="flex flex-col w-[50%]">
				<Routes>
					<Route path="/post/:slug" element={<Post />} />
					<Route path="/edit/:slug" element={<EditPost />} />
				</Routes>
			</section>
		</div>
	);
}

function Layout() {
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
			<div className="flex flex-row min-h-[38rem]">
				<section className="flex flex-col w-[50%]">
					<Link to="/edit/new">
						<p className="">Create New Post</p>
					</Link>

					<PostLinks
						postDictionary={posts}
						className="pl-0"
						// style={{ paddingLeft: 0 }}
						//mdn width;
					/>
				</section>
				<section className="flex flex-col w-[50%]">
					<Routes>
						<Route>
							<Route path="/post/:slug" element={<Post />} />
							<Route path="/edit/:slug" element={<EditPost />} />
						</Route>
					</Routes>
				</section>
			</div>
		</section>
	);
}
