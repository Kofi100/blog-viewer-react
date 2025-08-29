// src/pages/Blog.jsx
import { Link, useLocation } from "react-router-dom";
import PostLinks from "../components/PostLinks";
import { Fragment } from "react";
import Post from "./Post";
import EditPost from "./EditPost";
import { Routes, Route, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
	{ slug: "firstBlog", title: "Welcome to My Blog" },
	{ slug: "second-post", title: "Second Post[Deleted]" },
	{ slug: "test", title: "Test blog" },
	{ slug: "fourthSlug", title: "Fourth Post" },
];

export default function Blog() {
	const location = useLocation();
	return (
		// <Routes>
		// 	<Route path="/blog" element={<Layout />}></Route>
		// 	<Route path="/post/:slug" element={<Post />} />
		// 	<Route path="/edit/:slug" element={<EditPost />} />
		// </Routes>
		<div className="flex flex-row min-h-[100vh] font-body">
			<section className="flex flex-col min-w-[50%] ">
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
			<section
				className="flex flex-col min-w-[50%] "
				style={{ perspective: 1200, backfaceVisibility: "hidden" }}
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={location.pathname} // <-- important: triggers animation on route change
						initial={{
							rotateY: 90,
							opacity: 0,
							// boxShadow: "0 0 30px rgba(0,0,0,0.3)",
						}}
						animate={{
							rotateY: 0,
							opacity: 1,
							// boxShadow: "0 0 0 rgba(0,0,0,0)",
						}}
						exit={{
							rotateY: -90,
							opacity: 0,
							// boxShadow: "0 0 30px rgba(0,0,0,0.3)",
						}}
						transition={{
							duration: 0.8,
							ease: "easeInOut",
						}}
						style={{ transformOrigin: "left center" }}
					>
						<Routes>
							<Route path="/post/:slug" element={<Post />} />
							<Route path="/edit/:slug" element={<EditPost />} />
						</Routes>
					</motion.div>
				</AnimatePresence>
			</section>
		</div>
	);
}
