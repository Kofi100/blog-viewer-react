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
		fetch(`https://blog-viewer-react-backend.onrender.com/api/posts/${slug}`)
			.then((res) => res.text())
			.then(setContent)
			.catch(() => setContent("# 404 - Post not found"));
	}, [slug]);

	return (
		<article>
			<ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]}>
				{content}
			</ReactMarkdown>
			<p />
			<a href={`/edit/${slug}`}>Edit this post</a>
		</article>
	);
}
