// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";
//use BrowserRouter as Router since Router is a low-level component that expects a manual history or location
//while BrowserRouter handles everything (and is likely what I need 99% of the time)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./pages/Post.jsx";
import EditPost from "./pages/EditPost.jsx";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div>
			<Router>
				<Routes>
					<Route path="/*" element={<Home />} />
					{/* adding an asterisk enables nested routing in the component without going to the main app */}
					{/* link ends up here */}
					{/* <Route path="/post/:slug" element={<Post />} />
					<Route path="/edit/:slug" element={<EditPost />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
