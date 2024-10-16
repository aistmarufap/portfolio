import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    // Fetch the posts from the public folder
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-4">Blog Posts</h1>
            <div className="container mx-auto p-4 blog_info overflow-y-auto no-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.id}`}>
                            <div
                                
                                className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex items-center p-5 gap-5"
                            >
                                <img
                                    src="https://via.placeholder.com/1920x1080?text=Heroku+Deployment"
                                    alt={post.title}
                                    className="w-48 object-cover rounded-lg"
                                />
                                <div>
                                    <h2 className="text-lg text-white mb-2">
                                        {post.title.slice(0, 25)}
                                    </h2>
                                    <p className="text-[12px] text-[#E13A4B] mb-2">
                                        --{post.tags[0]}
                                    </p>
                                    <p className="text-[10px] text-white">{post.body.slice(0, 130)}....</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
