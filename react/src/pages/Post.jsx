// src/pages/Post.jsx
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import { useState, useEffect } from "react";

export default function Post() {
	const { slug } = useParams();
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(`http://localhost:3000/api/posts/${slug}`)
			.then((res) => res.text())
			.then(setContent)
			.catch(() => setContent("# 404 - Post not found"));
	}, [slug]);

	return (
		<article
			className="pl-5 pr-5 min-h-[100vh] book-line-bg"
			style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
		>
			<ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]}>
				{content}
			</ReactMarkdown>
			<p />
			<a href={`/edit/${slug}`}>Edit this post</a>
		</article>
	);
}
