import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

export default function EditPost() {
	const slugParam = useParams().slug;
	const [slug, setSlug] = useState(slugParam || "");
	const [content, setContent] = useState("");

	useEffect(() => {
		if (slugParam && slugParam !== "new") {
			fetch(
				`https://blog-viewer-react-backend.onrender.com/api/posts/${slugParam}`
			)
				.then((res) => res.text())
				.then(setContent)
				.catch(() => setContent("# 404 - Post not found"));
		} else {
			setContent("");
		}
	}, [slugParam]);

	const handleSave = () => {
		if (!slug || slug === "new") {
			alert("Slug cannot be empty");
			return;
		}
		fetch("https://blog-viewer-react-backend.onrender.com/api/save-post", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ slug, content }),
		})
			.then((res) => res.json())
			.then((data) => alert(data.message))
			.catch(() => alert("Error saving post"));
	};

	return (
		<div className="text-start">
			<h1>{slugParam ? `Edit Post: ${slugParam}.md` : "Create New Post"}</h1>
			<p>
				{slugParam
					? "This is where you can edit your post."
					: "Enter a new slug and content to create a post."}
			</p>
			<div className="flex flex-col">
				<h2>Name of your post.</h2>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Slug Name"
					value={slug}
					onChange={(e) => setSlug(e.target.value)}
				/>
				<h2>Content of your post.</h2>
				<textarea
					name="post"
					id="post"
					cols="100"
					rows="30"
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				></textarea>
			</div>
			<h2>Preview of Post</h2>
			<section className="flex flex-col rounded-lg border-2 border-white border-dashed min-h-[500px] min-w-[500px]">
				<ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]}>
					{content}
				</ReactMarkdown>
			</section>
			<input type="submit" value="Save Progress" onClick={handleSave} />
		</div>
	);
}
